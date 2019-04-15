const Product = require('../models/Product');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe');
const User = require('../models/User');

module.exports = {
    createCategory: (req, res, next) => {
        const category = req.body;

        Category.create(category)
            .then((category) => {
                res.status(200)
                    .json({
                        message: `Category ${category.name} created successfully!`,
                        category
                    })
            })
            .catch((err) => {
                if (!err.statusCode) {
                    err.statusCode = 500
                }

                next(err);
            })
    },

    createProduct: (req, res, next) => {
        const product = req.body;

        Product.create(product)
               .then((product) => {
                   res.status(200)
                      .json({
                          message: `Product ${product.name} created successfully`,
                          product
                      })
               }).catch(err => {
                   if(!err.statusCode) {
                       err.statusCode = 500
                   }

                   next(err);
               })
    },

    createRecipe: async (req, res, next) => {
        let recipe = req.body;
        console.log(recipe)
        let category =  await Category.findOne({"name":recipe.category})
        recipe.category = category._id;
        let creator = await User.findById(recipe.creator);

        Recipe.create(recipe)
            .then(async (recipe) => {        
                await category.recipes.push(recipe);
                category.save();

                await creator.createdRecipes.push(recipe._id);
                creator.save();

                res.status(200)
                    .json({
                        message: `Recipe ${recipe.name} created successfully!`,
                        recipe
                    })
            })
            .catch((err) => {
                if (!err.statusCode) {
                    err.statusCode = 500
                }

                next(err);
            })
    },

    deleteRecipe: (req, res, next) => {
        const { id } = req.params;

        Recipe.findByIdAndRemove(id)
                .then((recipe) => {
                    res.status(200).json({message: 'Recipe deleted successfully!'})
                }).catch((err) => {
                    if (!err.statusCode) {
                        err.statusCode = 500
                    }
    
                    next(err);
                })
    }
}