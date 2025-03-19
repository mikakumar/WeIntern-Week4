const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    material: String,
    weight: Number,
    price: Number
});

module.exports = mongoose.model('Product', productSchema);