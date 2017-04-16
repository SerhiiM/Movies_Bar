var express = require('express');
var app = express();
var cors = require('cors');
var compression = require('compression')

function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
        return false
    }
    return compression.filter(req, res)
}

app.use(cors());
app.options('*', cors());

app.use(compression({filter: shouldCompress}));

app.use('/api/', require('./server/api'));

app.listen(8083, function () {
  console.log('Server in on 8083 port!');
});