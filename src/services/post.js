const Sequelize = require('sequelize');
const { BlogPost, Category, PostCategory } = require('../database/models');
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

module.exports = {
  create,
};