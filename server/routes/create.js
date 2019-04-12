const router = require('express').Router();
const createController = require('../controllers/create');
const isAuth = require('../middleware/auth');

router.post('/createCategory', createController.createCategory);
router.post('/addProduct', createController.createProduct);
router.post('/addRecipe', createController.createRecipe);
router.get('/deleteRecipe/:id', createController.deleteRecipe);

module.exports = router;