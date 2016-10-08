var {app,BrowserWindow} = require('electron');

var mainWindow = null;

app.on('window-all-closed',()=>{
    if(process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready',()=>{
    mainWindow = new BrowserWindow({width: 960,height: 600});

    mainWindow.loadURL('file://'+ __dirname + '/index.html');

    mainWindow.openDevTools();

    mainWindow.on('closed',()=>{
        mainWindow = null;
    });
});