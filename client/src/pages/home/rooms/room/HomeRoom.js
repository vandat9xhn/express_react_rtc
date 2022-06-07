import React from 'react';

import FriendCard from '../../../../components/friend_card/FriendCard';

import './HomeRoom.scss';

//
function HomeRoom({ name, picture, joinRoom }) {
  //
  return (
    <div className="HomeRoom">
      <div className="HomeRoom_room">
        <FriendCard name={name} picture={picture} />
      </div>

      <div className="HomeRoom_actions">
        <button type="button" className="HomeRoom_action" onClick={joinRoom}>
          Join
        </button>
      </div>
    </div>
  );
}

export default HomeRoom;
