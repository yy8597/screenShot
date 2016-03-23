/**
 * server
 */

var express = require('express');
var http = require('http');
var app = express();


app.get('/1', function(req, res) {
    res.sendFile(__dirname + '/html/sdk_template.html')
});

app.get('/2', function(req, res) {
    res.sendFile(__dirname + '/html/sdk_template_1.html')
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + req.url)
});

http.createServer(app).listen(3333, function () {
    console.log("Express server listening on port 3333");
});



/**
 * screen shot
 */

var exec = require('child_process').exec
var script = __dirname + '/rasterize.js'
var cmd = ['phantomjs', script, 'http://localhost:3333'];
cmd = cmd.join(' ');
var screenShot = function () {
console.log(cmd);
    exec(cmd, function callback(err){
        if(err){
            return console.log('screenShot > ',err);
        }
        console.log((new Date).toLocaleTimeString() + ' | cut done');
    })
}
screenShot();


/**
 * watch
 */

var watch = require('watch')
watch.createMonitor('./html', function (monitor) {
    // monitor.files['/home/mikeal/.zshrc'] // Stat object for my zshrc.
    // monitor.on("created", function (f, stat) {
      // Handle new files
    // })
    monitor.on("changed", function (f, curr, prev) {
        screenShot()
      // Handle file changes
    })
    // monitor.on("removed", function (f, stat) {
      // Handle removed files
    // })
    // monitor.stop(); // Stop watching
})