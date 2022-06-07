import Home from '../pages/home/_main/Home';
import Login from '../pages/login/_main/Login';
import VideoRoom from '../pages/video_room/_main/VideoRoom';
import Voice from '../pages/voice/_main/Voice';

//
export const AppRouters = [
  {
    path: '/home',
    component: Home,
    index: true,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/video/:id',
    component: VideoRoom,
  },
  {
    path: '/voice',
    component: Voice,
  },
];
