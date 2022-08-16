import { combineReducers } from "../../node_modules/@reduxjs/toolkit/dist/index";
import auth from './auth';
import loading from './loading';

const rootReducer = combineReducers({
    auth,
    loading
});

export default rootReducer;