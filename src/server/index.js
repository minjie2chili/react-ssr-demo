import app from './http';
import renderer from './renderer';
import createStore from './createStore';
import { matchRoutes } from 'react-router-config';
import routes from '../share/routes';

app.get('*', (req, res) => {
  const store = createStore();
  // 获取请求地址和路由配置信息
  const promises = matchRoutes(routes, req.path).map(({route}) => {
    if (route.loadData) return route.loadData(store);
  })
  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  })
});

