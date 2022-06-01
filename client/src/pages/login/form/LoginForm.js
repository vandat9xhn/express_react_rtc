import React, { useRef } from 'react';

import FriendCard from '../../../components/friend_card/FriendCard';

//
function LoginForm({ name, picture, handleChangeName, handleChangePic }) {
  //
  const refIpFile = useRef(null);

  // ----
  const clickToChoosePic = () => {
    refIpFile.current.click();
  };

  //
  return (
    <div>
      <div>
        <input type="text" value={name} onChange={handleChangeName} />
      </div>

      {/* input pic */}
      <div>
        <input
          ref={refIpFile}
          type="file"
          accept="image/*"
          hidden
          onChange={handleChangePic}
        />

        <button type="button" onClick={clickToChoosePic}>
          Choose a picture
        </button>
      </div>

      {/* preview */}
      <div>
        <FriendCard name={name || 'Your name'} picture={picture} />
      </div>
    </div>
  );
}

export default LoginForm;
