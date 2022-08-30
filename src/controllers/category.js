const CategoryService = require('../services/category');

const create = async (req, res) => {
    const { name } = req.body;
    const category = await CategoryService.create({ name });

    res.status(201).json(category);
};

const findAll = async (req, res) => {
    const categories = await CategoryService.findAll();

    res.status(200).json(categories);
}

module.exports = {
    create,
    findAll,
};