import { call, put } from 'redux-saga/effects';
import { finishLoading, startLoading } from "../modules/loading";

export const createRequestActionTypes = type => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
    console.log(type)
    console.log(request)
    // request: 요청
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    // 제너레이터 함수 사용
    return function* (action) {
        yield put(startLoading(type)); // 로딩 시작
        console.log(action)
        try {
            // 문제 :: 여기서 response를 못가져옴...
            const response = yield call(request, action.payload);
            console.log(response)
            yield put({
                type: SUCCESS,
                payload: response?.data,
            });
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true
            });
        }
        yield put(finishLoading(type)); // 로딩 끝
    };
};