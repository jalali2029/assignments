import React, {Component} from "react"
import DataList from "./DataList"

import axios from "axios"

const VschoolApiUrl = "http://api.vschool.io:6543/hitlist.json";

class DataContainer extends Component {
    constructor (props){
        super(props);
        this.state ={
            people:[],
            errMsg: "",
            loading: true
        }
    }

componentDidMount(){
    axios.get (VschoolApiUrl)
        .then(response => {
            // const {results} = response.data; used to check what the API look like
            // console.log(response.data)
            this.setState({
                people: response.data,
                loading: false
            })
        })
}
    render (){
        const {people, errMsg, loading} = this.state 
        if (loading){
            return <div>...Loading</div>
        }else {
            if (errMsg){
                return <p>Data not Available</p>
            }else {
                return (
                    <DataList people={people}></DataList>
                )
            }
        }
        
    }
}

export default DataContainer