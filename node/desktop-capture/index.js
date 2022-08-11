const { desktopCapturer, dialog, Menu} = require('electron');


// Get the available video sources
async function getVideoSources(e) {
  const inputSources = await desktopCapturer.getSources({
    types: ['window', 'screen']
  });

  const videoOptionsMenu = Menu.buildFromTemplate(
    inputSources.map(source => {
      return {
        label: source.name,
        click: (_, browserWindow) =>  { browserWindow.webContents.send('SourceSelected', source)}
      };
    })
  );

  videoOptionsMenu.popup();
}

function buildMediaRecorder() {
}



function handleStart() {
}

async function handleStop() {


}


module.exports = { getVideoSources, handleStart, handleStop, buildMediaRecorder }