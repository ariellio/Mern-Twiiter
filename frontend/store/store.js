import { cretaeStore, applymiddleWare, createStore }  from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers/root_reducer.js'

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applymiddleWare(thunk, logger))
};

export default configureStore;