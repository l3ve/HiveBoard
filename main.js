var {app, BrowserWindow} = require('electron');

var mainWindow = null;

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('ready', createWindow);

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
    // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
    // 否则绝大部分应用及其菜单栏会保持激活。
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // 在 macOS 上，当点击 dock 图标并且该应用没有打开的窗口时，
    // 绝大部分应用会重新创建一个窗口。
    if (mainWindow === null) {
        createWindow();
    }
});


function createWindow() {
    mainWindow = new BrowserWindow({ width: 960, height: 600 });

    mainWindow.loadURL(`file://${__dirname}/index.html`);
    // 启用开发工具。
    mainWindow.openDevTools();

    mainWindow.on('closed', () => {
        mainWindow = null;
        app.quit();
    });
}