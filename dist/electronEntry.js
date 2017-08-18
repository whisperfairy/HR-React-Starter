/**
 * Created by hurong on 2016/12/2.
 */
const {app, BrowserWindow, webContents} = require('electron')
const {ipcMain} = require('electron')
const path = require('path')
const url = require('url')
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({fullscreen:true})

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'nwEntry.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open the DevTools.
   // win.webContents.openDevTools()
    win.setMenuBarVisibility(false);
    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

ipcMain.on('closeWin', (event, arg) => {
   app.quit()
})
let newWin = null;
ipcMain.on('openNewWin',(event,args)=>{
   win.webContents.downloadURL(args)
// if (!newWin)
// {
//     newWin = new BrowserWindow({width:800,height:600});
//     newWin.loadURL(args[0]);
//     newWin.show();
//     newWin.on('close',()=>{
//         newWin=null;
//     })
// }
})
app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})
/**
 * Created by hurong on 2016/12/27.
 */
 const HOST="172.18.3.217";
// const dgram = require('dgram');
// const server = dgram.createSocket('udp4');
// const Client = dgram.createSocket('udp4');
// Client.on('error', (err) => {
//     console.log(`server error:\n${err.stack}`);
//     Client.close();
// });
//
// Client.on('message', (msg, rinfo) => {
//
//     console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
// });
//
// Client.on('listening', () => {
//     var address = Client.address();
//     console.log(`server listening ${address.address}:${address.port}`);
//     Client.setMulticastTTL(128);
//     Client.addMembership("224.0.0.1");
//
//     setInterval(function(){
//         Client.send('sb',21000,"224.0.0.1",function(err){
//             console.log(err);
//         });
//     },2000)
// });
// Client.bind(21000,HOST);
// server.on('error', (err) => {
//     console.log(`server error:\n${err.stack}`);
//     server.close();
// });
//
// server.on('message', (msg, rinfo) => {
//     console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
//     win.webContents.send('multiCast', `server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
// });
//
// server.on('listening', () => {
//     var address = server.address();
//     console.log(`server listening ${address.address}:${address.port}`);
//     server.setMulticastTTL(128);
//     server.addMembership("224.0.0.1");
// });
// server.bind(21000,"224.0.0.1");

