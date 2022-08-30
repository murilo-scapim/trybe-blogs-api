const rescue = require('express-rescue');
const { Router } = require('express');
const CategoryController = require('../controllers/category');
const { validateToken } = require('../middlewares/validateToken');

const router = Router();

router.use(validateToken);
router.post('/', rescue(CategoryController.create));
router.get('/',CategoryController.findAll);

module.exports = router;