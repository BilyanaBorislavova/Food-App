const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: mongoose.Schema.Types.String, required: true}
})

const product = mongoose.model('Product', productSchema);

module.exports = product;