import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './containers';
import Home from './components/home';
import About from './components/about';
import Blog from './containers/blog';
import PageNotFound from './components/errors/pageNotFound';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/blog" component={Blog} />
    <Route path='/404' component={PageNotFound} />
    <Redirect from='*' to='/404' />
  </Route>
);

export default routes;
