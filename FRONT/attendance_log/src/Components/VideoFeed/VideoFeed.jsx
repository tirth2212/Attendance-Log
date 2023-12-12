import React, { useEffect, useRef } from 'react';
import io from 'socket.io-client';

const VideoComponent = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const socket = io.connect('http://127.0.0.1:8080');

    socket.on('connect', function () {
      console.log('Connected...!', socket.connected);
    });

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const video = videoRef.current;

    video.width = 400;
    video.height = 300;

    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        video.play();
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    getUserMedia();

    const FPS = 3;

    const intervalId = setInterval(() => {
      const width = video.width;
      const height = video.height;
      context.drawImage(video,0,0);
      const data = canvas.toDataURL('image/jpeg',1.0);
      photoRef.current.setAttribute('src', data);
      context.clearRect(0, 0, width, height);
      // socket.emit('image', data);
    }, 1000 / FPS);

    socket.on('response_back', function (image) {
      // photoRef.current.setAttribute('src', image);
    });

    // Cleanup function
    return () => {
      clearInterval(intervalId);
      socket.disconnect();
    };
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (
    <div>
      <div id="container">
        <video ref={videoRef} autoPlay playsInline id="videoElement"></video>
        <canvas ref={canvasRef} id="canvas" width="640" height="480" style={{display: "None"}}></canvas>
      </div>

      <div className="video">
        <img ref={photoRef} id="photo" width="400" height="300" alt="video"/> 
        {/* style={{display: 'none'}} /> */}
        {/* <h1>video</h1> */}
      </div>
    </div>
  );
};

// export default VideoComponent;
const VideoFeed = () => {
    return (
                    <section style={{display: 'flex', flexDirection: 'column', margin: "40px 10px", backgroundColor: "#ffffff", padding: "20px", width: "45vw"}} className='some-space'>
        				<h2>Video Feed - classroom 1</h2>
                        <VideoComponent/>
        			</section>
            );
        };

export default VideoFeed