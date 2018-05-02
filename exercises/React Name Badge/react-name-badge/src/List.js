import React from 'react'
import Person from "./Person";

const List = (props) => {
    const badge = props.people.map((person, i) => 
        <Person key={person.firstname + i} person={person} />)
    return(
        
        <div>
            {badge}
            {/* {props.people.map((person, i) => 
            <Person key={person.firstname + i} person={person} />)} */}
        </div>
    )
}
export default List