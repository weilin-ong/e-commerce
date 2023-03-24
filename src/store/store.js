import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
//redux logger group all logs
//import logger from 'redux-logger';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';

function loggerMiddleware(store) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      if (!action.type) {
        return next(action);
      }

      console.log('type: ', action.type);
      console.log('payload: ', action.payload);
      console.log('currentState: ', store.getState());

      //all the reducers gets called
      next(action);

      console.log('next state: ', store.getState());
    };
  };
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
//filter to avoid false value in production
const middlewares = [
  process.env.NODE_ENV === 'development' && loggerMiddleware,
  // thunk, //replaced by saga
  sagaMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV === 'development' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

//export const store = createStore(rootReducer, composedEnhancers);
export const store = createStore(persistedReducer, composedEnhancers);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

/*
createStore: to actually create a Redux store
combineReducers: to combine multiple slice reducers into a single larger reducer
applyMiddleware: to combine multiple middleware into a store enhancer
compose: to combine multiple store enhancers into a single store enhancer
*/

/*
Actions: are plain objects with a type field, and describe "what happened" in the app
Reducers: are functions that calculate a new state value based on previous state + an action
A Redux store: runs the root reducer whenever an action is dispatched
*/
