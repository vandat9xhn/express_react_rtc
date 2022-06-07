import React, { useContext, useState } from 'react';

import { ContextApp } from '../../../contextAPI/ContextApp';

import HomeFriends from '../friends/_main/HomeFriends';
import HomeInvite from '../invite/_main/HomeInvite';
import HomeRooms from '../rooms/_main/HomeRooms';

import './Home.scss';

//
const friend_arr = [
  {
    name: 'Nguyen Nguyen',
    picture: '',
  },
  {
    name: 'My My',
    picture: '',
  },
  {
    name: 'My Nguyen',
    picture: '',
  },
];

const room_arr = [
  {
    name: 'Room 1',
    picture: '',
  },
  {
    name: 'Room 2',
    picture: '',
  },
];

//
function Home(props) {
  //
  // const { socket } = useContext(ContextApp);

  //
  const [invite_obj, setInviteObj] = useState({
    name: '',
    picture: '',
    type: '',
    title: '',
  });

  // ---

  const requestChat = ({ name, picture }) => {
    setInviteObj({
      name: name,
      picture: picture,
      type: 'chat',
      title: 'Chat',
    });
  };

  const requestVoice = ({ name, picture }) => {
    setInviteObj({
      name: name,
      picture: picture,
      type: 'voice',
      title: 'Voice call',
    });
  };

  const requestVideo = ({ name, picture }) => {
    setInviteObj({
      name: name,
      picture: picture,
      type: 'video',
      title: 'Video call',
    });
  };

  const handleCancelInvite = () => {
    setInviteObj({
      name: '',
      picture: '',
      type: '',
      title: '',
    });
  };

  const joinRoom = () => {};

  //
  return (
    <div className="Home">
      <div className="Home_row">
        <div className="Home_col Home_friends">
          <HomeFriends
            friend_arr={friend_arr}
            requestChat={requestChat}
            requestVoice={requestVoice}
            requestVideo={requestVideo}
          />
        </div>

        <div className="Home_col Home_rooms">
          <HomeRooms room_arr={room_arr} joinRoom={joinRoom} />
        </div>
      </div>

      <HomeInvite
        invite_obj={invite_obj}
        handleCancelInvite={handleCancelInvite}
      />
    </div>
  );
}

export default Home;
