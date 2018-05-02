import React from "react"
import Person from "./Person"

function List (props){
    return(
        <ul>
            {props.people.map((person, i) => <Person key={person.firstname + i} person={person} />)}
        </ul>
    )
}

export default List;