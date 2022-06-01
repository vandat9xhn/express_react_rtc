import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { HAS_SERVER } from './const/fakeServer';
import { getSocket } from './utils/getSocket';

import './App.scss';
import './index.scss';

import ContextAppComponent from './contextAPI/ContextAppComponent';
import AppRouteComponent from './router/AppRouteComponent';

//
function App() {
  //
  const [_, setForceUpdate] = useState(false);

  //
  const refSocket = useRef();

  //
  useEffect(() => {
    if (HAS_SERVER) {
      refSocket.current = getSocket();

      refSocket.current.io.on('open', () => {
        setForceUpdate((force_update) => !force_update);
      });
    } else {
      refSocket.current = {
        on: (...data) => {
          console.log(data);
        },
      };
      setForceUpdate((force_update) => !force_update);
    }
  }, []);

  //
  return (
    <Router>
      <ContextAppComponent socket={refSocket.current}>
        <div className="App">
          <AppRouteComponent />
        </div>
      </ContextAppComponent>
    </Router>
  );
}

export default App;
