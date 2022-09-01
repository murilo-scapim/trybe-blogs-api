const service = require('../services/post');

const create = async (req, res) => {
  const blogPost = await service.create(req.body, req.user.id);

  return res.status(201).json(blogPost)
};

const findAll = async (_req, res) => {
  const blogPosts = await service.findAll();

  return res.status(200).json(blogPosts);
};

module.exports = {
  create,
  findAll,
};