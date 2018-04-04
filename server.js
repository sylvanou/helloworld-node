var port = process.env.PORT || 4444;
var express = require('express');
var app = express();

app.listen(port, function (err) {
    if (err) console.log('error', err);

    console.log('Server listening on port: ' + port);
});

app.get('/', function(req, res){
    res.send('Hello World');
})
