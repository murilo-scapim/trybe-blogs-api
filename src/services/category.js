const validations = require('../helpers/validations');
const { Category } = require('../database/models');

const create = async ({ name }) => {
    validations.validateCategoryBody({ name });

    const category = await Category.create({ name });
    return category;
};

// The raw: true option turns off metadata
const findAll = async () => Category.findAll();

module.exports = {
    create,
    findAll,
};