const rescue = require('express-rescue');
const { Router, application } = require('express');
const UserController = require('../controllers/user');
const { validateToken } = require('../middlewares/validateToken');

const router = Router();

router.post('/', rescue(UserController.create));

router.use(validateToken); // todas rotas abaixo passam a validar o token

router.get('/', rescue(UserController.getAll));
router.get('/:id', rescue(UserController.getById));

module.exports = router;