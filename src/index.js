import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Search from './components/Search';
import User from './components/User';
import Followers from './components/Followers';
import Following from './components/Following';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Search}/>
            <Route path="user/:username" component={User}>
              <Route path="followers" component={Followers} />
              <Route path="following" component={Following} />
            </Route>
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
