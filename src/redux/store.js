import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducer.js";
import rootSaga from "../saga/userSaga.js";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store