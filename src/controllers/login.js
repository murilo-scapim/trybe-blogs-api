const validateLoginBody = require('../helpers/validations');
const service = require('../services/login');

const login = async(req, res) => {
    validateLoginBody(req.body);
    const { email, password } = req.body;
    const token = await service.login(email, password);
    
    res.status(200).json({ token });
};

module.exports = {
    login,
};