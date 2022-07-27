'use strict'
const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    let win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.loadFile('../HTMLS/Login.html')
    win.show()

    win.on('closed', () => {
        win = null;
        app.quit();
    });
});