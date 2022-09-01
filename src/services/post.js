const Sequelize = require('sequelize');
const { BlogPost, Category, PostCategory, User } = require('../database/models');
const config = require('../database/config/config');
const validations = require('../helpers/validations');

const sequelize = new Sequelize(config.development);

const create = async (post, userId) => {
    validations.validateBlogPostBody(post);
    
    const { categoryIds } = post;

    const { count } = await Category.findAndCountAll({
        where: { id: categoryIds } });
    
    if (count !== categoryIds.length) {
        const err = new Error('"categoryIds" not found');
        err.statusCode = 400;
        throw err;
    }

    try {
      const result = await sequelize.transaction(async (t) => {
        const newBlogPost = await BlogPost.create({
            ...post, userId
        }, { transaction: t });
        
        const arrPostCategory = categoryIds.map((categoryId) => (
          { categoryId, postId: newBlogPost.dataValues.id }));
        
        await PostCategory.bulkCreate( arrPostCategory, { transaction: t });

        return newBlogPost.dataValues;
      });

      return result;

    } catch (e) {
        throw new Error('Algo deu errado');
    }
}

const findAll = async () =>
  BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } } ],
  });

const findOne = async (id) => {
  const blogPost = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } } ],
  });

  if (!blogPost) {
    const err = new Error('Post does not exist');
    err.statusCode = 404;
    throw err;
  }
  return blogPost;
};

const update = async (post, postId, userId) => {
    validations.validateBlogPostUpdate(post);
    const result = await BlogPost.findByPk(postId);

    if (userId !== result.userId) {
        const err = new Error('Unauthorized user');
        err.statusCode = 401;
        throw err;
    }

    await BlogPost.update(post, { where: { id: postId } });

    return findOne(postId);
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
};