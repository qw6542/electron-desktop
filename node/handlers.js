
const { ipcMain } = require('electron');
const { getToken } = require('./scs-token');
const { getVideoSources,  buildMediaRecorder, handleStart, handleStop } = require('./desktop-capture');

ipcMain.handle('getToken',(event, args) => {

    return getToken(args);
  });
  

ipcMain.handle('getVideoSources', async(event, args) => {
  await getVideoSources();
});

ipcMain.handle('handleStart', async(event, args) => {
  await handleStart(args);
});


ipcMain.handle('handleStop', async(event, args) => {
  await handleStop(args);
});

ipcMain.handle('buildMediaRecorder', async(event, args) => {
  buildMediaRecorder(args);
});

