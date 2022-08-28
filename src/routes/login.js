const rescue = require('express-rescue');
const { Router } = require('express');
const LoginController = require('../controllers/login');

const router = Router();

router.post('/', rescue(LoginController.login));

module.exports = router;