const express = require('express');
const router = express.Router();
const path = require('path');

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/about', mainController.about);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/productCart', mainController.productCart);
router.get('/productDetail', mainController.productDetail);


module.exports = router;