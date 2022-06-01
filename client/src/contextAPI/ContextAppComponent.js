import React, { useState } from 'react';
// import { useNavigate } from 'react-router';

import { ContextApp } from './ContextApp';

//
function ContextAppComponent({ children, socket, ...restProps }) {
  //
  // const navigate = useNavigate();

  //
  const [user, setUser] = useState({ name: '', picture: '' });

  // ----

  //
  if (!socket) {
    return null;
  }

  //
  // if (!user.name && location.pathname !== '/login') {
  //   navigate('/login');
  // }

  //
  return (
    <ContextApp.Provider
      value={{ socket: socket, ...restProps, user: user, setUser: setUser }}
    >
      {children}
    </ContextApp.Provider>
  );
}

export default ContextAppComponent;
