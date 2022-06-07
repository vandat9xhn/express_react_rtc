// import React from 'react';
import ReactDOM from 'react-dom';

// 
function Portal({ children }) {
  // 
  return ReactDOM.createPortal(
    children,
    document.getElementsByTagName('body')[0]
  );
}

export default Portal;
