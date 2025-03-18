const express = require('express');
const router = express.Router();

const Sign = require('../controllers/Sign.controller')
const Cookie = require('../controllers/Cookie.controller');
const Gold = require('../controllers/Gold.controller');

router.post('/api/register', Sign.Signup);
router.post('/api/signin', Sign.Signin);

router.post('/logout', Cookie.Logout)

router.post('/gold/fetch', Gold.GoldFetch )

module.exports = router;