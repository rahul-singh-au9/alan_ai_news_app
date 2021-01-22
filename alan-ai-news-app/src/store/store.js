// IMPORTING CREATESTORE
import { createStore, applyMiddleware } from 'redux';

// REDUX-LOGGER MIDDLEWARE
import logger from "redux-logger"

// REDUX-DEVTOOLS FOR DEBUGGING REDUX
import {composeWithDevTools} from "redux-devtools-extension"

// REDUX-THUNK
import thunk from "redux-thunk"

import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;