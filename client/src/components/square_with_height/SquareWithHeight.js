import React from 'react';

import './SquareWithHeight.scss';

//
function SquareWithHeight({ children }) {
  //
  return (
    <div className="SquareWithHeight">
      <div className="SquareWithHeight_contain">
        <svg className="SquareWithHeight_svg" viewBox="0 0 100 100"></svg>

        <div className="SquareWithHeight_children">{children}</div>
      </div>
    </div>
  );
}

export default SquareWithHeight;
