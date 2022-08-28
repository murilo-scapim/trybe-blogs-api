const validations = require('../helpers/validations')
const service = require('../services/user');

const create = async(req, res) => {
    validations.validateUserBody(req.body);
    const token = await service.create(req.body);
    
    res.status(201).json({ token });
};

module.exports = {
    create,
};