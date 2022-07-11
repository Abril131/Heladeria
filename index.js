'use strict'
const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    let win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    win.loadFile('Home1.html')
    win.show()

    win.on('closed', () => {
        win = null;
        app.quit();
    });
});


/*app.on('ready', () => {
    let win = new BrowserWindow({width: 800, height: 600});
    win.on('close', () => {
        win = null;
        app.quit();
    });
    win.loadFile('AsianFood.html')
});
*/
/*app.on('ready', () => {
    let win = new BrowserWindow({width: 800, height: 600});
    win.on('close', () => {
        win = null;
        app.quit();
    });
    win.loadURL('https://www.w3schools.com/')
});*/