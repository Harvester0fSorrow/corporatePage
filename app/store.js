import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import _ from 'lodash';
import reducers from './reducers';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import initialStateHome from './initialStates/home';
import initialStateMetaData from './initialStates/metaData';
import initialStateAbout from './initialStates/about';
import initialStateBlog from './initialStates/blog';
import initialStateErrors from './initialStates/errors';



export default function configureStore(history) {
    const finalCreateStore = compose(
              applyMiddleware(thunk, routerMiddleware(history))
          )(createStore);

        let finalState = _.merge(initialStateHome,initialStateMetaData,
          initialStateAbout,initialStateBlog,initialStateErrors);
        reducers.routing = routerReducer;
        return finalCreateStore(
                          combineReducers(reducers),
                          finalState);
}

module.exports = configureStore;
