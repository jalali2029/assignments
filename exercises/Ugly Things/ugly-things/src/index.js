import React from 'react'
import ReactDOM from "react-dom";
import store from "./redux/Redux.js"
import { Provider } from "react-redux"
import App from "./App"
import "./Styles.css"


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root"))
