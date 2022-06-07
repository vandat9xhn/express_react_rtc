import React from 'react';

import FriendCard from '../friend_card/FriendCard';

import './UserCard.scss';

//
function UserCard({ name, picture }) {
  //
  return (
    <div className="UserCard">
      <FriendCard name={name} picture={picture} />
    </div>
  );
}

export default UserCard;
