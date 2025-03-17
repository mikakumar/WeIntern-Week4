const mongoose = require('mongoose');

const goldSchema = mongoose.Schema({
    timestamp: String,
    metal: String,
    currency: String,
    exchange: String,
    prev_close_price: Decimal128,
    open_price: Decimal128,
    low_price: Decimal128,
    high_price: Decimal128,
    open_time: Decimal128,
    price: Decimal128,
    ch: Decimal128,
    chp: Decimal128,
    ask: Decimal128,
    bid: Decimal128,
    price_gram_24k: Decimal128,
    price_gram_22k: Decimal128,
    price_gram_21k: Decimal128,
    price_gram_20k: Decimal128,
    price_gram_18k: Decimal128,
    price_gram_16k: Decimal128,
    price_gram_14k: Decimal128,
    price_gram_10k: Decimal128
})