import React from 'react'

const Person = (props) => {
    return(
        <div>
            <h1>Badge: </h1>
        <ul>
            <li>Name: {props.person.firstname} {props.person.lastname}</li>
            <li>Place of Birth: {props.person.placeofbirth}</li>
            <li>Email: {props.person.email}</li>
            <li>Phone: {props.person.phone}</li>
            <li>Favorite Food: {props.person.favoritefood}</li> <br />
            </ul>
            <p>{props.person.comment}</p>
        </div>
        
    )
}
export default Person