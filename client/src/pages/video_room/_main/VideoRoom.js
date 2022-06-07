import React, { useContext, useEffect, useRef, useState } from 'react';
import Peer, { MediaConnection } from 'peerjs';

import { ContextApp } from '../../../contextAPI/ContextApp';

import VideoCallLarge from '../../../components/video_call/large/VideoCallLarge';

import './VideoRoom.scss';

// User: "getUserMedia";
// User sends to socket: user-connected
// Socket on 'user-connected' for other users: call that user and create a video when that user on stream
// User add event when called: will create video for other users;
// A user disconnected: socket emit 'user-disconnected'
// Socket on 'user-disconnected' for other users: remove that disconnected user

//
function VideoRoom(props) {
  //
  const { socket } = useContext(ContextApp);

  //
  const [user_arr, setUserArr] = useState([]);

  //
  const refUserArr = useRef(
    [] || [
      { peer_id: '', stream: new MediaStream(), call: new MediaConnection() },
    ]
  );
  const refStream = useRef(new MediaStream());
  const refPeer = useRef(new Peer());

  //
  useEffect(() => {
    refPeer.current = new Peer();
    handleUserDevice();
    handleHasNewUser();
    handleUserDisconnected();
  }, []);

  // ----

  const addUser = (
    new_user = { peer_id: '', stream: new MediaStream(), call: null }
  ) => {
    const user_peer = refUserArr.current.find(
      (item) => item.peer_id === new_user.peer_id
    );

    let track = null;

    if (user_peer) {
      track = new_user.stream.getTracks()[0];
      user_peer.stream.addTrack(track);
    } else {
      refUserArr.current.push(new_user);
    }

    setUserArr([...refUserArr.current]);
  };

  const removeUser = (user_peer_id) => {
    refUserArr.current = refUserArr.current.filter(
      (item) => item.peer_id !== user_peer_id
    );
    setUserArr([...refUserArr.current]);
  };

  // ------- USER

  //
  const handleUserDevice = async () => {
    const stream = await window.navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });

    refStream.current = stream;
    handleUserConnected();
    handleUserCalled();
  };

  const handleUserConnected = () => {
    const ROOM_ID = window.location.pathname.split('/').slice(-1)[0];

    refPeer.current.on('open', (user_peer_id) => {
      addUser({
        peer_id: user_peer_id,
        stream: refStream.current,
        call: null,
      });
      socket.emit('user-connected', ROOM_ID, user_peer_id);
    });
  };

  const handleUserCalled = () => {
    refPeer.current.on('call', (call) => {
      // answer
      call.answer(refStream.current);
      // other user on stream
      call.on('stream', (other_user_stream) => {
        const other_user_peer_id = call.peer;
        addUser({
          peer_id: other_user_peer_id,
          stream: other_user_stream,
          call: call,
        });
      });
    });
  };

  // -------- CONNECT OTHER USERS

  const handleHasNewUser = () => {
    socket.on('user-connected', (user_peer_id) => {
      const call = refPeer.current.call(user_peer_id, refStream.current);
      const other_user_peer_id = call.peer;

      call.on('stream', (other_user_stream) => {
        addUser({
          peer_id: other_user_peer_id,
          stream: other_user_stream,
          call: call,
        });
        // other user on close
        // call.on('close', () => {
        //   console.log('close');
        //   removeUser(other_user_peer_id);
        // });
      });
    });
  };

  const handleUserDisconnected = () => {
    socket.on('user-disconnected', (other_user_peer_id) => {
      const other_user_disconnected = refUserArr.current.find((item) => {
        return item.peer_id === other_user_peer_id;
      });

      if (other_user_disconnected) {
        other_user_disconnected.call.close();
        removeUser(other_user_peer_id);
      }
    });
  };

  //
  return (
    <div className="VideoRoom">
      <ul className="VideoRoom_list list-none">
        {refUserArr.current.map((item, ix) => (
          <li key={item.peer_id}>
            <VideoCallLarge stream={item.stream} />
            <div>{item.peer_id.slice(0, 20)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoRoom;
