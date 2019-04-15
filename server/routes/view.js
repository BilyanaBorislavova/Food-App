const router = require('express').Router();
const viewController = require('../controllers/view');

router.get('/allCategories', viewController.viewAllCategories);
router.get('/allProducts', viewController.viewAllProducts);
router.get('/allRecipes/:id', viewController.viewAllRecipes);
router.get('/details/:id', viewController.viewDetails);
router.get('/myRecipes/:id', viewController.viewMyRecipes);
router.get('/addToFavourites/:recipeId/:userId', viewController.addRecipe);
router.get('/favouriteRecipes/:id', viewController.viewFavouriteRecipes);

module.exports = router;