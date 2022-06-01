import {
  LIST_ONLINE,
  NEW_USER,
  SIGN_UP_FAIL,
  USER_QUIT,
} from '../const/socketEvents';

//
export function handlePeopleOnline() {
  return {
    onSignUpFail(handleSignUpFail) {
      socket.on(SIGN_UP_FAIL, handleSignUpFail);
    },
    onNewUser(handleNewUser) {
      socket.on(NEW_USER, handleNewUser);
    },
    onUserQuit(handleUserQuit) {
      socket.on(USER_QUIT, handleUserQuit);
    },
  };
}
