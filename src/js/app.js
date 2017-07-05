import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Storage from './reducers/index';

import NotificationsShell from'./NotificationsShell';

import { Router, Route, Link, browserHistory, hashHistory} from 'react-router';
import * as Routes from "./Routes";
import {MuiThemeProvider,getMuiTheme} from 'material-ui/styles';
import injectTapEventPlugin from "react-tap-event-plugin";

import "../style/AppStyles.scss";

injectTapEventPlugin();


let store = createStore(Storage);

ReactDOM.render(
  <Provider store={store}>
      <NotificationsShell>
        <MuiThemeProvider>
          <Router
            routes={Routes.getAppRoutes(store)}
            history={hashHistory}>
          </Router>
        </MuiThemeProvider>
      </NotificationsShell>
  </Provider>,
  document.getElementById('root')
);
