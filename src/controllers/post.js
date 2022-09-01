const service = require('../services/post');

const create = async (req, res) => {
  const blogPost = await service.create(req.body, req.user.id);

  return res.status(201).json(blogPost)
}

module.exports = {
  create,
};