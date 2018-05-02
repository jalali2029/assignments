import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"

const App = (props) => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Services" component={Services} />
                </Switch>
            </div>
            <Footer />
        </div>
    )
}
export default App
