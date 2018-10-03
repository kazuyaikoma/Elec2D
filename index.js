'use strict';

// a module which controlls application
var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

// main window's global declaration for not gabage collectioning
let mainWindow;

// end app if all windows be closed
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// execute after electron's initialization finished
app.on('ready', function() {
  // display main window
  mainWindow = new BrowserWindow({
    "title-bar-style": "hidden-inset",
    "transparent": true,
    "frame": false,
    "resizable":   false,
    "hasShadow":   false,
    "alwaysOnTop": true,
    "titlebarAppearsTransparent": true,
    width: 800,
    height: 800
  });
  mainWindow.loadURL('file://' + __dirname + '/sample/Simple/simple.html');
  // end app if mainWindow be closed
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
