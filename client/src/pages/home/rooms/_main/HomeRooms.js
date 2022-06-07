import React from 'react';

import HomeRoom from '../room/HomeRoom';

//
function HomeRooms({ room_arr, joinRoom }) {
  //
  return (
    <div className="HomeRooms">
      <div>
        <h3>Join a room now!</h3>
      </div>
      
      <ul className="HomeRooms_list list-none">
        {room_arr.map((item, ix) => (
          <li key={item.name} className="HomeRooms_item">
            <HomeRoom
              name={item.name}
              picture={item.picture}
              joinRoom={joinRoom}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeRooms;
