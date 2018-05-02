import React from "react"

function Person(props) {
    return (
        <div>
            <h1>{props.person.firstname}</h1>
            <h1>{props.person.lastname}</h1>
            <h1>{props.person.email}</h1>
            <hr/>
        </div>
    )
}
export default Person;