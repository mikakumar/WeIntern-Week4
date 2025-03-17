const express = require('express');
const router = express.Router();

const Sign = require('../controllers/Sign.controller')
const Cookie = require('../controllers/Cookie.controller');

router.post('/api/register', Sign.Signup);
router.post('/api/signin', Sign.Signin);

router.post('/logout', Cookie.Logout)

module.exports = router;