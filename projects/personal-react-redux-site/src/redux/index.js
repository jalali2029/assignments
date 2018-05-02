import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import weatherReducer from "../redux/weather-api"

const store = createStore (combineReducers({weather: weatherReducer}),
applyMiddleware(thunk))
store.subscribe(()=>
console.log(store.getState()));

export default store;