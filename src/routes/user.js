const rescue = require('express-rescue');
const { Router } = require('express');
const UserController = require('../controllers/user');

const router = Router();

router.post('/', rescue(UserController.create));

module.exports = router;