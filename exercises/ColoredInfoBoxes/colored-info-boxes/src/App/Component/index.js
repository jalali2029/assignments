import React from "react"

function Component (props){
     const bgColor = {
        backgroundColor:props.backgroundColor
        }
return (
    <div style={bgColor}>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <p>{props.information}</p>
    </div>
)
}
export default Component