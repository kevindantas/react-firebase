import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import App from './App';
import LayoutAuth from './components/layouts/LayoutAuth';
import Layout from './components/layouts/Layout';

import Auth from './components/Auth';
import Chat from './components/Chat';
import Account from './components/Account';
import NotFound from './components/NotFound';

import './index.css';

var config = {
  apiKey: 'AIzaSyDEN8BThQzkqc42rDQsrU4qpYw09tb5k_A',
  authDomain: 'react-firebase-60254.firebaseapp.com',
  databaseURL: 'https://react-firebase-60254.firebaseio.com',
  storageBucket: 'react-firebase-60254.appspot.com',
  // messagingSenderId: "485290901676"
};
firebase.initializeApp(config);


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />

    <Route path="/auth" component={LayoutAuth}>
       <IndexRoute component={Auth} />
    </Route>

    <Route path="/" component={Layout} title="dawdaw" >
      <Route path="chat" component={Chat} title="dawdaw" />
      <Route path="account" component={Account} />
    </Route>

    <Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('root')
);
