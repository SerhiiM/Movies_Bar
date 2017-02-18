var express = require('express');
var app = express();
var cors = require('cors');
var compression = require('compression')

function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
        return false
    }
    // fallback to standard filter function
    return compression.filter(req, res)
}

app.use(cors());
app.options('*', cors());

app.use(compression({filter: shouldCompress}));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/info', function (req, res) {
    res.json({
        result: 'Info about company'
    });
});

app.listen(8083, function () {
  console.log('Server in on 8083 port!');
});