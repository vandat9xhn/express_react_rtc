import React from 'react';

import InviteLayout from '../../layout/InviteLayout';

import './Inviting.scss';

//
function Inviting({
  name,
  picture,
  title_cancel = 'Cancel',
  children,
  handleCancel,
}) {
  //
  return (
    <InviteLayout picture={picture} name={name}>
      <div>
        {children}

        <div className="Inviting_actions">
          <button type="button" onClick={handleCancel}>
            {title_cancel}
          </button>
        </div>
      </div>
    </InviteLayout>
  );
}

export default Inviting;
