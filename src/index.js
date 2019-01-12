import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { postsReducer } from './store/reducers/postsReducer';
import { commentReducer } from './store/reducers/commentReducer';
import { reducer as formReducer } from 'redux-form';
import { editReducer } from './store/reducers/editReducer';
import { userReducer } from './store/reducers/userReducer';
import { todosReducer } from './store/reducers/todoReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    posts:postsReducer,
    comments:commentReducer,
    form:formReducer,
    editPost:editReducer,
    users:userReducer,
    todos:todosReducer
})

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))

const app = (
    <Provider store={store} >
        <Router basename="/">
            <App/>
        </Router>
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
