import React from 'react';

import { DEFAULT_PICTURE } from '../../const/fakeServer';

import './FriendCard.scss';

//
function FriendCard({ name, picture }) {
  //
  return (
    <div className="FriendCard">
      <div className="FriendCard_row">
        <img
          className="FriendCard_pic"
          src={picture || DEFAULT_PICTURE}
          width="60"
          height="60"
          alt=""
        />

        <div className="FriendCard_name">{name}</div>
      </div>
    </div>
  );
}

export default FriendCard;
