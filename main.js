const { app, BrowserWindow } = require('electron')

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/www/assets/logo.png`,
    webPreferences: { webSecurity: false },
  });


  win.loadURL(`file://${__dirname}/www/index.html`);
  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  });
  win.removeMenu();
  win.maximize();
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})
