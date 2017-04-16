import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './Pages/MainPage';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers/index';

let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <MainPage/>
  </Provider>,
  document.getElementById('root')
);

