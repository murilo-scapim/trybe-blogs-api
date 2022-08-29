const CategoryService = require('../services/category');

const create = async (req, res) => {
    const { name } = req.body;
    const category = await CategoryService.create({ name });

    res.status(201).json(category);
};

module.exports = {
    create,
};