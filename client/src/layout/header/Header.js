import React, { useContext } from 'react';

import { ContextApp } from '../../contextAPI/ContextApp';
import FriendCard from '../../components/friend_card/FriendCard';

import './Header.scss';

//
function Header(props) {
  //
  const { user, setUser } = useContext(ContextApp);

  // ----

  //
  const handleQuit = () => {
    setUser({ name: '', picture: '' });
  };

  // -----

  //
  if (window.location.pathname === '/login') {
    return null;
  }

  //
  return (
    <div className="Header">
      <div className="Header_user">
        <FriendCard name={user.name} picture={user.picture} />
      </div>

      <div>
        <button type="button" onClick={handleQuit}>
          Quit
        </button>
      </div>
    </div>
  );
}

export default Header;
