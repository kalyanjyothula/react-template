import { takeLatest, call, put } from "redux-saga/effects";
import { getUser } from "./redux";
import axios from "axios";

export function* getUserSaga(action) {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const { data } = yield call(axios, { method: "GET", url });
    // yield put(setUser({ ...data }));
  } catch (error) {
    console.log(error);
  }
}

export const AppSaga = [takeLatest(getUser.type, getUserSaga)];