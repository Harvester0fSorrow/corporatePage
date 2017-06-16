import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './views/app';
import Home from './views/home';
import About from './views/about';
import PageNotFound from './views/errors/pageNotFound';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path='/404' component={PageNotFound} />
    <Redirect from='*' to='/404' />
  </Route>
);

export default routes;
