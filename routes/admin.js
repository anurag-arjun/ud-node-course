const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin.js');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

// /admin/product => POST
router.post('/product', adminController.postAddProduct);

// router.post('/edit-product', adminController.postEditProduct);

module.exports = router;