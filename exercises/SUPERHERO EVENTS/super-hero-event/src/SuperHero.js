import React from "react"


function SuperHero (props){
    function clickbutton (event){
        alert (`${props.heroes.catchphrase}`)
    }
    return (
        <div className="main">
            <h1>Name: {props.heroes.name}</h1>
            <h2>Age: {props.heroes.age}</h2>
            <h3 className="marquee">Catchphrase: {props.heroes.catchphrase}</h3>
            <img src={props.heroes.img} onClick={clickbutton}></img>
            
        </div>
        
    )
}
export default SuperHero