const express = require('express');
const parser = require('./parser');
const app = express();

app.use(express.static('public'));

app.get('/', function(request, response) {
  
    // parse request with parser module
    var parsedData = parser(request);
  
    response.send(JSON.stringify(parsedData));
  
});

app.listen(process.env.PORT);
