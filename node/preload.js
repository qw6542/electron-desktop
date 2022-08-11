const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('API', {
  invoke: (channel, args) => {
    const validApiChannels = [
      'getToken',
      'getVideoSources',
      'handleStop',
      'handleStart',
      'handleDataAvailable',
      'buildMediaRecorder',
      'getPhotonUI'
    ];
    if (validApiChannels.includes(channel)) {
      return ipcRenderer.invoke(channel, args);
    }
  },
  receive: (channel, func) => {
    const validApiChannels = [
      'SourceSelected',    ];
    if (validApiChannels.includes(channel)) {
      return ipcRenderer.on(channel, (event, ...args) => func(args));
    }
  },
});

