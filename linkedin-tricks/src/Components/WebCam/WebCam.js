import React, { useEffect, useRef } from "react";

export const WebCam = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    start();
  }, []);

  const start = () => {
    const nav = navigator ? navigator.mediaDevices : null;
    if (nav && nav.getUserMedia) {
      nav
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <React.Fragment>
      <p>Javascript Webcam</p>
      <hr />
      <code>allow access to your webcam to see the result : </code>
      <div>
        <video
          ref={videoRef}
          height="100%"
          width="100%"
          className="my-auto mx-auto"
        ></video>
      </div>
    </React.Fragment>
  );
};
