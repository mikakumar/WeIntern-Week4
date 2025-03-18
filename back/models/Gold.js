const mongoose = require('mongoose');

const goldSchema = mongoose.Schema({
    date: Number,
    timestamp: String,
    metal: String,
    currency: String,
    exchange: String,
    price: String,
    prev_close_price: Number,
    open_price: Number,
    low_price: Number,
    high_price: Number,
    open_time: Number,
    ch: Number,
    chp: Number,
    ask: Number,
    bid: Number,
    price_gram_24k: Number,
    price_gram_22k: Number,
    price_gram_21k: Number,
    price_gram_20k: Number,
    price_gram_18k: Number,
    price_gram_16k: Number,
    price_gram_14k: Number,
    price_gram_10k: Number,
})

module.exports = mongoose.model('Gold', goldSchema);