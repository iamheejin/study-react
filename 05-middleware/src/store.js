import { createStore, applyMiddleware } from 'redux';
import modules from './modules';


//redux-devtool-extension
//import { composeWithDevTools } from 'redux-devtools-extension';
//const store = createStore(modules, composeWithDevTools());

//직접 작성한 middleware
//import loggerMiddleware from './lib/loggerMiddleware';
//const store = createStore(modules, applyMiddleware(loggerMiddleware));

//redux-logger 라이브러리
import { createLogger } from 'redux-logger';
const logger = createLogger();
const store = createStore(modules, applyMiddleware(logger));

export default store;