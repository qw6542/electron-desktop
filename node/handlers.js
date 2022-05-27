
const { ipcMain } = require('electron')
const { getToken } = require('./scs-token');

ipcMain.handle('getToken',(event, args) => {

    return getToken(args);
  });
  