import React, { useEffect, useRef } from 'react';

//
function VideoCallLarge({ stream }) {
  //
  const refVideo = useRef(null);

  //
  useEffect(() => {
    refVideo.current.srcObject = stream;
  }, []);
  //
  return (
    <div>
      <video ref={refVideo} width={200} height={200} autoPlay />
    </div>
  );
}

export default VideoCallLarge;
