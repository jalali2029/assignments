import React from "react"

function Person (props){
    
    return(
        <li>
            <h1>{props.name}</h1>
            <img src={props.image} />
        </li>
    )
}

export default Person