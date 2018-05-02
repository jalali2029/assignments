import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from "./Header"
import Footer from "./Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Links from "./pages/Links"
import Charecter from "./pages/Charecter"


const App = (props) => {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route exact path="/link" component={Links}/>
                    <Route path="/charecters/:id" component={Charecter}/>
                </Switch>
            </div>
            <Footer />
        </div>
    )
}
export default App
