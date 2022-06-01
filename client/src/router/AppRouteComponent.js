import React from 'react';
import { Route, Routes } from 'react-router';

import { AppRouters } from './_main';

//
function AppRouteComponent(props) {
  //
  return (
    <Routes>
      {AppRouters.map((item) => (
        <Route
          key={item.path}
          index={!!item.index}
          path={item.path}
          element={<item.component />}
        />
      ))}
    </Routes>
  );
}

export default AppRouteComponent;
