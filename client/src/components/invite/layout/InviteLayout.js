import React from 'react';

import { DEFAULT_PICTURE } from '../../../const/fakeServer';

import Portal from '../../portal/Portal';

import './InviteLayout.scss';

function InviteLayout({ picture, name, children }) {
  //
  return (
    <Portal>
      <div className="InviteLayout">
        <div className="InviteLayout_contain">
          <div className="InviteLayout_user">
            <div className="InviteLayout_user_pic">
              <img
                className="InviteLayout_user_img"
                src={picture || DEFAULT_PICTURE}
                width={60}
                height={60}
                alt=""
              />
            </div>

            <div className="InviteLayout_name">{name}</div>
          </div>

          {children}
        </div>
      </div>
    </Portal>
  );
}

export default InviteLayout;
