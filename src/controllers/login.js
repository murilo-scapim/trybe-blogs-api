const LoginService = require('../services/login');

const login = async(req, res) => {
    const { email, password } = req.body;
    const token = await LoginService.login({ email, password });
    
    res.status(200).json({ token });
};

module.exports = {
    login,
};