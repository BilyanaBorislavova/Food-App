const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {type: mongoose.Schema.Types.String, required: true, minlength: 5},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    photo: {type: mongoose.Schema.Types.String, required: true},
    products: [{type: mongoose.Schema.Types.String, required: true}],
    description: {type: mongoose.Schema.Types.String, required: true},
    creator: {type: mongoose.Schema.Types.ObjectId, required: true}
});

const recipe = mongoose.model('Recipe', recipeSchema);

module.exports = recipe;