import Home from '../pages/home/_main/Home';
import Login from '../pages/login/_main/Login';
import Video from '../pages/video/_main/Video';
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
    path: '/video',
    component: Video,
  },
  {
    path: '/voice',
    component: Voice,
  },
];
