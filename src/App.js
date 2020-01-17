import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from  './style';
import { IconStyle } from './assets/iconfont/iconfont';
import routes from './routes/index.js';
import store from './store/index'
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        { renderRoutes(routes) }
      </HashRouter>
    </Provider>
    
  );
}

export default App;
