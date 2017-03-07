const express = require('express');
const app = express();
const path = require('path');

const forceSSL = function() {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(
              ['http://', req.get('Host'), req.url].join('')
            );
        }
        next();
    };
};

app.use(forceSSL());

// path location strategy
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// only serve files from dist build folder
app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);


