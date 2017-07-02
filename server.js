const express = require('express');
const parser = require('./parser');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', function(request, response) {
    var parsedData = parser(request);
    response.send(JSON.stringify(parsedData));
});

app.listen(port);
