import React from 'react';

import InviteLayout from '../layout/InviteLayout';

//
function Invited({
  title_accept = 'Accept',
  title_refuse = 'Refuse',
  children,

  handleAccept,
  handleRefuse,
}) {
  //
  return (
    <InviteLayout>
      <div>
        {children}

        <div>
          <button type="button" onClick={handleAccept}>
            {title_accept}
          </button>

          <button type="button" onClick={handleRefuse}>
            {title_refuse}
          </button>
        </div>
      </div>
    </InviteLayout>
  );
}

export default Invited;
