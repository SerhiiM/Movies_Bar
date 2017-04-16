var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.get('/info', function (req, res) {
    res.json({
        result: 'Info about company'
    });
});

router.get('/invoices', function (req, res) {
    res.json({
        result: [
            {
                id:1,
                custumer_id:1,
                discount:0,
                total:200
            },{
                id:2,
                custumer_id:1,
                discount:5,
                total:300
            }
        ]
    });
});
module.exports = router;