import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./redux/index"
import App from "./App"
import "./Styles.css"

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById("root"))



    //  API Key ece76aff7c60e9179106d4f367f20d2d
