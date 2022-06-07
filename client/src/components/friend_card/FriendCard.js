import React from 'react';

import { DEFAULT_PICTURE } from '../../const/fakeServer';

import SquareWithHeight from '../square_with_height/SquareWithHeight';

import './FriendCard.scss';

//
function FriendCard({ name, picture }) {
  //
  return (
    <div className="FriendCard">
      <SquareWithHeight>
        <img
          className="FriendCard_pic"
          src={picture || DEFAULT_PICTURE}
          alt=""
        />
      </SquareWithHeight>

      <div className="FriendCard_name">{name}</div>
    </div>
  );
}

export default FriendCard;
