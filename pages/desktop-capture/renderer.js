
// Global state

const recordedChunks = [];
let mediaRecorder; // MediaRecorder instance to capture footage


// Buttons
const videoElement = document.querySelector('video');

const startBtn = document.getElementById('startBtn');
startBtn.onclick = e => {

  if(!mediaRecorder){
    API.invoke('getVideoSources');
  } else{
    startBtn.classList.add('is-danger');
    startBtn.innerText = 'Recording';
    mediaRecorder.start();
  }
};

const stopBtn = document.getElementById('stopBtn');

stopBtn.onclick = e => {
  startBtn.classList.remove('is-danger');
  startBtn.innerText = 'Start';

  mediaRecorder.stop();


};

const videoSelectBtn = document.getElementById('videoSelectBtn');
videoSelectBtn.onclick = async() => {

  const mediaDevices = await navigator.mediaDevices;

  console.log(mediaDevices);

  API.invoke('getVideoSources');

  };;

  function buildMediaRecorder(stream) {

    // Create the Media Recorder
    const options = { mimeType: 'video/webm; codecs=vp9' };
    mediaRecorder = new MediaRecorder(stream, options);
  
    // Register Event Handlers
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.onstop = download;
}

  
API.receive('SourceSelected', async (args)=>{
  const [source] = args;

  videoSelectBtn.innerText = source.name;
  
    const constraints = {
      audio: false,
      video: {
        mandatory: {
          chromeMediaSource: 'desktop',
          chromeMediaSourceId: source.id
        }
      }
    };
  
    // Create a Stream
    const stream = await navigator.mediaDevices
      .getUserMedia(constraints);
  
    // Preview the source in a video element
    videoElement.srcObject = stream;
    videoElement.play();
  
    buildMediaRecorder(stream);

});

  // Captures all recorded chunks

  function handleDataAvailable(event) {
    console.log("data-available");
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
    } 
  }

  function download() {
    const blob = new Blob(recordedChunks, {
      type: "video/webm"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = `vid-${Date.now()}.webm`;
    a.click();
    window.URL.revokeObjectURL(url);
  }


