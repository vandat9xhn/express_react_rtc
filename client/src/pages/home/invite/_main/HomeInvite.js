import React from 'react';

import Inviting from '../../../../components/invite/inviting/_main/Inviting';

import './HomeInvite.scss';

//
function HomeInvite({ invite_obj, handleCancelInvite }) {
  //
  if (invite_obj.type === '') {
    return null;
  }

  //
  return (
    <Inviting
      name={invite_obj.name}
      picture={invite_obj.picture}
      handleCancel={handleCancelInvite}
    >
      <div>
        <div>{invite_obj.title}</div>

        <div>
          Waiting for {invite_obj.name}{' '}
          <span className="HomeInvite_dot">.</span>{' '}
          <span className="HomeInvite_dot">.</span>{' '}
          <span className="HomeInvite_dot">.</span>
        </div>
      </div>
    </Inviting>
  );
}

export default HomeInvite;
