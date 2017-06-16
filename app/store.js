import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import _ from 'lodash';
import reducers from './reducers';
import { routerReducer, routerMiddleware } from 'react-router-redux';


export default function configureStore(history) {
    const finalCreateStore = compose(
              applyMiddleware(thunk, routerMiddleware(history))
          )(createStore);
        reducers.routing = routerReducer;
        return finalCreateStore(combineReducers(reducers));
}
