const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('API', {
  invoke: (channel, args) => {
    const validApiChannels = [
      'getToken',
    ];
    if (validApiChannels.includes(channel)) {
      return ipcRenderer.invoke(channel, args);
    }
  },
});

