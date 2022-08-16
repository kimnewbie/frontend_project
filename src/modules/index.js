import { combineReducers } from "../../node_modules/@reduxjs/toolkit/dist/index";
import auth, { authSaga } from './auth';
import loading from './loading';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    auth,
    loading
});

export function* rootSaga() {
    yield all([authSaga]);
}

export default rootReducer;