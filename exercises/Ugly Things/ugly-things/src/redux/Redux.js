import { createStore, combineReducers } from "redux";
import imageReducer from "./Images"
const store = createStore(combineReducers({ images: imageReducer }))
store.subscribe(() => console.log(store.getState()))
export default store;