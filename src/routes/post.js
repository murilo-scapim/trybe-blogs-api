const rescue = require('express-rescue');
const { Router } = require('express');
const PostController = require('../controllers/post');
const { validateToken } = require('../middlewares/validateToken');

const router = Router();

router.use(validateToken); // todas rotas abaixo passam a validar o token

router.post('/', rescue(PostController.create));

module.exports = router;