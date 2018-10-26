import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import usuario from './store/reducers/usuario';
import categoria from './store/reducers/categoria';
import especialidade from './store/reducers/especialidade';

const rootReducer = combineReducers({
    usua: usuario,
    espe: especialidade,
    cate: categoria
});

const logger = store => {
    return next => {
        return action => {
            const result = next(action);
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)) );

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
