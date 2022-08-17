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
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ReduxThunk,
    sagaMiddleware,
    // logger // 콘솔창이 너무 복잡해져서 주석 처리
  ]
});//configureStore 적용

sagaMiddleware.run(rootSaga);

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