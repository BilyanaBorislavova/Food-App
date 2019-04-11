const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {type: mongoose.Schema.Types.String, required: true},
    recipes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'}],
    photo: {type: mongoose.Schema.Types.String, required: true}, 
});

const category = mongoose.model('Category', categorySchema);

module.exports = category;

