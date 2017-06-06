import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './views/app';
import Home from './views/home';
import Blog from './views/blog';
import About from './views/about';
import PageNotFound from './views/errors/pageNotFound.js';

let routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
        <Route path='/404' component={PageNotFound} />
        <Redirect from='*' to='/404' />
    </Route>
);

module.exports = routes;
