import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import _ from 'lodash';
import reducers from './reducers';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import initialStateBlog from './initialStates/blog';
import initialStateErrors from './initialStates/errors';



export default function configureStore(history) {
    const finalCreateStore = compose(
              applyMiddleware(thunk, routerMiddleware(history))
          )(createStore);

        let finalState = _.merge(initialStateBlog,initialStateErrors);
        reducers.routing = routerReducer;
        return finalCreateStore(
                          combineReducers(reducers),
                          finalState);
}

module.exports = configureStore;
