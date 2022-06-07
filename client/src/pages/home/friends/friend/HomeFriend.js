import React from 'react';

import IconChat from '../../../../icons/chat/IconChat';
import IconVideo from '../../../../icons/video/IconVideo';
import IconVoice from '../../../../icons/voice/IconVoice';

import FriendCard from '../../../../components/friend_card/FriendCard';

import './HomeFriend.scss';

//
function HomeFriend({
  name,
  picture,

  requestChat,
  requestVoice,
  requestVideo,
}) {
  const onRequestChat = () => {
    requestChat({ name: name, picture: picture });
  };
  const onRequestVoice = () => {
    requestVoice({ name: name, picture: picture });
  };
  const onRequestVideo = () => {
    requestVideo({ name: name, picture: picture });
  };

  //
  return (
    <div className="HomeFriend">
      <div className="HomeFriend_friend">
        <FriendCard name={name} picture={picture} />
      </div>

      <div className="HomeFriend_actions">
        <button
          type="button"
          className="HomeFriend_action"
          onClick={onRequestChat}
        >
          <IconChat />
        </button>

        <button
          type="button"
          className="HomeFriend_action"
          onClick={onRequestVoice}
        >
          <IconVoice />
        </button>

        <button
          type="button"
          className="HomeFriend_action"
          onClick={onRequestVideo}
        >
          <IconVideo />
        </button>
      </div>
    </div>
  );
}

export default HomeFriend;
