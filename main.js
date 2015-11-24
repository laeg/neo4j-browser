'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var express = require('express');
var expressApp = express();

var mainWindow = null;

expressApp.set('port', (process.env.PORT || 5000));

expressApp.use(express.static(__dirname + '/dist/browser'));

// views is directory for all template files
//expressApp.set('views', __dirname + '/views');
//expressApp.set('view engine', 'ejs');

expressApp.get('/', function(request, response) {
    response.render('dist/browser/index');
});

expressApp.listen(expressApp.get('port'), function() {
    console.log('Neo4j browser is running on port', expressApp.get('port'));
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });

    mainWindow.loadURL('http://localhost:5000');
});
