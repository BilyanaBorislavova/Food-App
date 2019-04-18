const User = require('../models/User');
const Category = require('../models/Category');
const Product = require('../models/Product');
const Recipe = require('../models/Recipe');

module.exports = {
  viewAllCategories: (req, res, next) => {
    Category.find()
      .then((categories) => {
        res
          .status(200)
          .json(categories);
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        next(error);
      });
  },

  viewAllProducts: (req, res, next) => {
    Product.find()
      .then((products) => {
        res
          .status(200)
          .json({ message: 'Loaded all products', products });
      })
      .catch((error) => {
        if (!error.statusCode) {
          error.statusCode = 500;
        }
        next(error);
      });
  },

  viewAllRecipes: async (req, res, next) => {
    const {id} = req.params;
    let recipes = [];

    try{
    let category = await Category.findById(id);
    for(let recipeId of category.recipes) {
      let recipe = await Recipe.findById(recipeId);
      if(recipe !== null) {
      recipes.push(recipe);
      }
    }
    res.status(200)
        .json({message: `Loaded all ${category.name} recipes!`, recipes, categoryName: category.name})
  } catch(err) {
    console.log(err);
    next(err);
  } },

  viewDetails: async (req, res, next) => {
    const { id } = req.params;

    try{
      let recipe = await Recipe.findById(id).populate('category');
      res.status(200).json({message: "Loaded successfully", recipe})
    } catch(err) {
      console.log(err);
      next(err);
    }
  },

  editRecipe: (req, res, next) => {
    const {id} = req.params;
    const editedRecipe = req.body;
    
    Recipe.findByIdAndUpdate(id, editedRecipe)
    .then(() => {
      return res.status(200).json({
        success: true,
        message: 'Recipe edited successfully!'
      }).catch(err => {
        next(err);
      })
  })
  },

  addRecipe: async (req, res, next) => {
    const { recipeId, userId } = req.params;
    console.log(req.params)
    console.log('here')
    let user = await User.findById(userId);
    let recipe = await Recipe.findById(recipeId);

    if (user.myRecipes.indexOf(recipe._id) <= -1) {
      user.myRecipes.push(recipe);
      res.status(201).json({message: "Recipe added to list successfully!"})
    } else {
      res.status(500).json({message: "Recipe already added to your favourites!"})
    }
    user.save();
  },
//
   viewMyRecipes: async (req, res, next) => {
    const {id} = req.params;
    console.log(id)
    let user = await User.findById(id);
    let recipes = [];
    console.log(user)
    for(let recipeId of user.createdRecipes) {
      console.log(recipeId)
     let currentRecipe = await Recipe.findById(recipeId);
     recipes.push(currentRecipe);
    }

    res.status(200)
      .json({message: "Loaded all recipes! :) ", recipes})
  }, 

  viewFavouriteRecipes: async (req, res, next) => {
    const {id} = req.params;
    console.log(id)
    let user = await User.findById(id);
    let recipes = [];
    console.log(user)
    for(let recipeId of user.myRecipes) {
      console.log(recipeId)
     let currentRecipe = await Recipe.findById(recipeId);
     recipes.push(currentRecipe);
    }

    res.status(200)
      .json({message: "Loaded all recipes! :) ", recipes})
  },

  removeRecipe: async (req, res, next) => {
    const {recipeId, userId} = req.params;

    let user = await User.findById(userId);

    user.myRecipes.pull(recipeId)
     await user.save();
      console.log('Song removed!!')
    

    res.status(200)
    .json({message: "Song removed successfully!", songs: user.myPlaylist})
  }
}