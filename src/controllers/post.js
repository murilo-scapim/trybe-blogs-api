const service = require('../services/post');

const create = async (req, res) => {
  const blogPost = await service.create(req.body, req.user.id);

  return res.status(201).json(blogPost)
};

const findAll = async (_req, res) => {
  const blogPosts = await service.findAll();

  return res.status(200).json(blogPosts);
};

const findOne = async (req, res) => {
  const blogPost = await service.findOne(req.params.id);

  return res.status(200).json(blogPost);
};

const update = async (req, res) => {
  const blogPost = await service.update(req.body, req.params.id, req.user.id);

  return res.status(200).json(blogPost);
};

const destroy = async (req, res) => {
  await service.destroy(req.params.id, req.user.id);

  return res.status(204).end();
};

module.exports = {
  create,
  findAll,
  findOne,
  update,
  destroy,
};