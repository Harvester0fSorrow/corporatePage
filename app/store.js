import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reducers from './reducers';
import blogState from './initialStates/blogState';

export default function configureStore(history) {
  const finalCreateStore = compose(
    applyMiddleware(thunk, routerMiddleware(history)),
  )(createStore);
  reducers.routing = routerReducer;
  return finalCreateStore(combineReducers(reducers),
    blogState);
}
