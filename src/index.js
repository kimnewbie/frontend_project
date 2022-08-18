import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from '../node_modules/react-redux/es/exports';
import { configureStore } from '@reduxjs/toolkit/';
import rootReducer, { rootSaga } from './modules/index';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk'; // redux-thunk 추가
import { check, tempSetUser } from './modules/user';
// import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ReduxThunk,
    sagaMiddleware,
    // logger // 콘솔창이 너무 복잡해져서 주석 처리
  ]
});//configureStore 적용

function loadUser() {
  try {
    // 로컬 스토리지에 있는 user 정보 가져오기
    const user = localStorage.getItem('user');
    if (!user) return;
    // 새로고침 이후, 로그인  유지되도록 액션 발생
    store.dispatch(tempSetUser(JSON.parse(user)));
    // cehck 액션 디스패치 =>
    //실패-> 사용자 상태 초기화 및 localStorage 값 지워줌,
    // 성공-> 그대로 진행
    store.dispatch(check());
  } catch (e) {
    console.log('localStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
); 