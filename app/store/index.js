import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reducers, { storeInitialState } from './reducers';
import * as api from './api';

export default function configureStore(history) {
  const finalCreateStore = compose(
    applyMiddleware(
      thunkMiddleware.withExtraArgument(api),
      routerMiddleware(history),
    ),
  )(createStore);

  reducers.routing = routerReducer;

  return finalCreateStore(combineReducers(reducers),
    storeInitialState);
}
