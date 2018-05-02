import React from "react"
import Navbar from "./Navbar/";
import Content from "./Content/";
import Services from "./Services/"
import Images from "./Images/"
import Footer from "./Footer/"


function App (){
    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <Content></Content> 
            <Services></Services>
            <Images></Images>
            <Footer></Footer> 
        </div>
    )
}  

export default App