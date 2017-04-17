var express = require('express');
var router = express.Router();

var data = require('./default_data');

/**
 * Invoices List
 */
router.get('/invoices', function (req, res) {
    res.json(data.default_invoices_list);
});

router.post('/invoices', function (req, res) {
    res.json(req.body);
});

router.put('/invoices/:id', function (req, res) {
    res.json(req.body);
});
/**
 * Invoices Items
 */
router.get('/invoices/:id/items', function (req, res) {
    const needed_items = data.default_invoices_items.filter(item => {
        return item.invoice_id == req.params.id
    })
    res.json(needed_items);
});
/**
 * Customers
 */
router.get('/customers', function (req, res) {
    res.json(data.default_custumers);
});
/**
 * Products
 */
router.get('/products', function (req, res) {
    res.json(data.products);
});

module.exports = router;