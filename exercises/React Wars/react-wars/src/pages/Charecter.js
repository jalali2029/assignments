import React from 'react'
import axios from "axios"
class Charecter extends React.Component {

    constructor() {
        super();
        this.state = {
            contact: {}
        }
    }

    componentDidMount() {
        axios.get("https://swapi.co/api/people/charecter/${i}").then(response => {
            this.state({
                contact: response.data.results
            })
        })
    }


    render() {
        return (
            <div>
                <h1>{this.state.contact}</h1>
            </div>
        )
    }
}


export default Charecter