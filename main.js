var {app, BrowserWindow, Menu, MenuItem} = require('electron');

global.mainWindow = null;
var menu = Menu.buildFromTemplate([
  {
    submenu: [
      {
        label: '瞅啥瞅!'
      }
    ]
  },
  {
    label: 'Edit',
    submenu: [
      {
        label: 'Undo',
        accelerator: 'CmdOrCtrl+Z',
        role: 'undo'
      },
      {
        label: 'Redo',
        accelerator: 'Shift+CmdOrCtrl+Z',
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        label: 'Cut',
        accelerator: 'CmdOrCtrl+X',
        role: 'cut'
      },
      {
        label: 'Copy',
        accelerator: 'CmdOrCtrl+C',
        role: 'copy'
      },
      {
        label: 'Paste',
        accelerator: 'CmdOrCtrl+V',
        role: 'paste'
      },
      {
        label: 'Select All',
        accelerator: 'CmdOrCtrl+A',
        role: 'selectall'
      }
    ]
  },
  {
    label: 'View',
    submenu: [
      {
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click: function (item, focusedWindow) {
          if (focusedWindow) focusedWindow.reload()
        }
      },
      {
        label: 'Toggle Full Screen',
        accelerator: (function () {
          return (process.platform === 'darwin') ? 'Ctrl+Command+F' : 'F11'
        })(),
        click: function (item, focusedWindow) {
          if (focusedWindow) focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
        }
      },
      {
        label: 'Toggle Developer Tools',
        accelerator: (function () {
          if (process.platform === 'darwin') {
            return 'Alt+Command+I'
          } else {
            return 'Ctrl+Shift+I'
          }
        })(),
        click: function (item, focusedWindow) {
          if (focusedWindow) focusedWindow.toggleDevTools()
        }
      }
    ]
  },
  {
    label: 'Window',
    role: 'window',
    submenu: [
      {
        label: 'Minimize',
        accelerator: 'CmdOrCtrl+M',
        role: 'minimize'
      },
      {
        label: 'Close',
        accelerator: 'CmdOrCtrl+W',
        role: 'close'
      }
    ]
  },
  {
    label: 'Help',
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click: function () { require('electron').shell.openExternal('http://electron.atom.io') }
      }
    ]
  }
]);

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
  if (global.mainWindow === null) {
    createWindow();
  }
});
app.dock.setIcon(`file://${__dirname}/js.png`)

function createWindow() {
  Menu.setApplicationMenu(menu);
  global.mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: './favicon.ico',
    // type: 'desktop',
    // titleBarStyle: 'hidden'
  });
  global.mainWindow.loadURL(`file://${__dirname}/dist/index.html`);
  // 启用开发工具。
  // mainWindow.openDevTools();
  // 开启代理
  require('./server/proxy.js');
  console.log(`当前node版本 : ${process.version}`);
  global.mainWindow.on('closed', () => {
    global.mainWindow = null;
    app.quit();
  });
}