import React from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

class Links extends React.Component {
    constructor(){
        super()
        this.state ={
            contacts: []
        }
    }
    componentDidMount(){
        axios.get ("https://swapi.co/api/people").then(response => {
            this.setState({contacts: response.data.results})
            
        })
    }



    render(){
        const people = this.state.contacts.map((person, i) => <Link to={"/characters/" + i}>{person.name}</Link> )
        return(
            <div>
                <h1>{people}</h1>
            </div>
        )
    }


}


export default Links