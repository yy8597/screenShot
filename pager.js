var express = require('express');
var http = require('http');
var app = express();
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/html/sdk_template.html')
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + req.url)
});

http.createServer(app).listen(3333);

console.log("Express server listening on port 3333");


var exec = require('child_process').exec
var script = __dirname + '/rasterize.js'
var cmd = ['phantomjs', script, 'http://localhost:3333'];
cmd = cmd.join(' ');
exec(cmd, function callback(err){
    if(err){
        return console.log(err);
    }
    console.log('done');
    process.exit(1);
})