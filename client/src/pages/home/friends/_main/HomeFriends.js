import React from 'react';

import HomeFriend from '../friend/HomeFriend';

//
function HomeFriends({ friend_arr, requestChat, requestVoice, requestVideo }) {
  //
  return (
    <div className="HomeFriends">
      <div>
        <h3>Friends</h3>
      </div>

      <ul className="HomeFriends_list list-none">
        {friend_arr.map((item, ix) => (
          <li key={item.name} className="HomeFriends_item">
            <HomeFriend
              name={item.name}
              picture={item.picture}
              requestChat={requestChat}
              requestVoice={requestVoice}
              requestVideo={requestVideo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeFriends;
