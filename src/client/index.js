import React from 'react';
import ReactDom from 'react-dom';
import routes from '../share/routes';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import store from './createStore';

// 当服务器端store有数据，客户端的store还没数据时。hydrate会报警告

ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
