import React from "react"
function dollar (price){
    if (price>1000){
        return "$$$"
    }else if(price <1000 && price > 500){
        return "$$"
    } else {
        return "$"
    }
}
function Cards (props){
    console.log(props)
    return (
        <ul className={props.location.timeToGo}>
            <li><h1>Location: {props.location.place}</h1></li>
            <li><h2>Price: {props.location.price}</h2></li>
            <li>Season: {props.location.timeToGo}</li>
            <li>{dollar(props.location.price)}</li>
        </ul>
    )
}
export default Cards