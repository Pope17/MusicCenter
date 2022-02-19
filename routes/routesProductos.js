const express = require('express');
const productControllers = require('../controllers/productControllers.js');

const router = express.Router();

router.get('/', productControllers.index);

router.get ('/:idProducto', productControllers.detail)

module.exports = router;
