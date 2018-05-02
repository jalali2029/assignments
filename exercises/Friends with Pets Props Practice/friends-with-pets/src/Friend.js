import React from "react"
import Pet from "./Pet"



function Friend(props) {
    return (
        <div>
            <h1>Name:{props.person.name}</h1>
            <h3>Age:{props.person.age}</h3>
           
            <div>{props.person.pets.map((animal, i) => <Pet key={animal.name + i} pet={animal}  />)}
            <hr/>
            </div>
        </div>
    )
}
export default Friend