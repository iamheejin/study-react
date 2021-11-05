import { createStore, applyMiddleware } from 'redux';
import modules from './modules';


//1.redux-devtool-extension
//import { composeWithDevTools } from 'redux-devtools-extension';
//const store = createStore(modules, composeWithDevTools());

//2.직접 작성한 middleware
//import loggerMiddleware from './lib/loggerMiddleware';
//const store = createStore(modules, applyMiddleware(loggerMiddleware));

//3.redux-logger 라이브러리
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const logger = createLogger();
const store = createStore(modules, applyMiddleware(logger, ReduxThunk));

export default store;