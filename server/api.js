var express = require('express');
var router = express.Router();
var data = require('./default_data');

router.get('/invoices', function (req, res) {
    res.json(data.default_invoices_list);
});

router.get('/invoices/:id/items', function (req, res) {
    const needed_items = data.default_invoices_items.filter(item => {
        return item.invoice_id == req.params.id
    })
    res.json(needed_items);
});
module.exports = router;