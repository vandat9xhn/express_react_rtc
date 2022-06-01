import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../form/LoginForm';

import './Login.scss';

//
function Login(props) {
  //
  const navigate = useNavigate();

  //
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');

  // ----
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePic = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPicture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  //
  const handleJoin = () => {
    navigate('/home');
  };

  //
  return (
    <div className="Login">
      <div className="Login_contain">
        {/* title */}
        <div>
          <h1>Login</h1>

          <div>
            Choose your name and picture to join with us: Video call, Voice call
            and Chat
          </div>
        </div>

        {/* form */}
        <div>
          <LoginForm
            name={name}
            picture={picture}
            handleChangeName={handleChangeName}
            handleChangePic={handleChangePic}
          />
        </div>

        {/* note */}
        <div>We do not collect any of your information</div>

        <div>
          <button type="button" onClick={handleJoin}>
            Join now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
