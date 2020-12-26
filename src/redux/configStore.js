import { combineReducers, createStore } from "redux";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer";
//Cài đặt middleware redux thunk
import reduxThunk from "redux-thunk";
import { applyMiddleware } from "redux";

const rootReducer = combineReducers({
  QuanLyPhimReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
