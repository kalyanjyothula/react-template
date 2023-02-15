import { combineReducers } from "@reduxjs/toolkit";
import AppReducer from "../container/App/redux";

export const reducer = combineReducers({
    App: AppReducer,
  });