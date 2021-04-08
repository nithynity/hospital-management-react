import {createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginReducer from './reducer/login-reducer';

const store = createStore(
    combineReducers({
      login:loginReducer  
    }),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);
export default store;