import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import recipeReducer from "./recipe.js"

const store = createStore (combineReducers ({recipe: recipeReducer}), applyMiddleware(thunk))

store.subscribe (() => 
console.log(store.getState()))

export default store