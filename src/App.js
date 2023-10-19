import logo from './logo.svg';
import './App.css';
import React from 'react';
import Webcam from 'react-webcam';

const WebcamCapture = () => {
  const webcamRef = React.useRef(null);
  const  [imgsrc, setImgsrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgsrc(imageSrc);
  }, [webcamRef, setImgsrc]);
  
  return (
    <>
      <Webcam
        muted={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture photo</button>
      {imgsrc && (
        <img
          src={imgsrc}
        />
      )}
    </>
  );
};
export default WebcamCapture;
