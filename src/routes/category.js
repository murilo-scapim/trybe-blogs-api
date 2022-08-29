const rescue = require('express-rescue');
const { Router } = require('express');
const CategoriesController = require('../controllers/category');
const { validateToken } = require('../middlewares/validateToken');

const router = Router();

router.use(validateToken);
router.post('/', rescue(CategoriesController.create));

module.exports = router;