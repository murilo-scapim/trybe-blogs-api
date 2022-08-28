const validations = require('../helpers/validations')
const service = require('../services/user');

const create = async (req, res) => {
    validations.validateUserBody(req.body);
    const token = await service.create(req.body);
    
    res.status(201).json({ token });
};

const getAll = async (req, res) => {
    const users = await service.getAll();
    
    res.status(200).json(users);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const user = await service.getById(id);

    res.status(200).json(user);
};

module.exports = {
    create,
    getAll,
    getById,
};