import Home from './pages/home';
import List from './pages/list';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/list',
    ...List,
  },
];
