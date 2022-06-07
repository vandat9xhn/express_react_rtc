import React from 'react';

import Header from '../header/Header';

import './AppLayout.scss';

function AppLayout({ children }) {
  //
  return (
    <div>
      <header className="AppLayout_header">
        <Header />
      </header>

      <main>{children}</main>
    </div>
  );
}

export default AppLayout;
