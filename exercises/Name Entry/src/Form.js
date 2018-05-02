import React, { Component } from "react"
import List from "./List"

class Form extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            inputs: { 
                //wi can use props to set initial state if we want to:
                firstname:props.firstname || "",  //the name is empty when the page first load
                lastname: props.lastname || "", //these names should be exactly the same as defined names inside form
                email:props.email || ""
            },
            people:[]
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        //this is the function for change input
        //take the value from the input and set state accordingly 
        const { value, name } = event.target; //it is deconstruction of [name]:value under inputs
        this.setState(prevState => {
            return {
                inputs: {
                    //we need prev state so that we can include all the values that we Havent' change:
                    ...prevState.inputs,
                    // change the One value we do want to change
                    [name]: value
                }
            }
        });
    }
    handleSubmit (event){
        event.preventDefault();
        this.setState(prevState => {
            return {
                inputs: this.initialState.inputs,
                people: [...prevState.people, prevState.inputs]
            }
        })
    }
    render() {
        const { firstname, lastname, email } = this.state.inputs;
        const {people} = this.state;
        return (
            <form onSubmit = {this.handleSubmit}>
                <input name="firstname" onChange={this.handleChange} value={firstname} type="text" placeholder="Enter Name" />  {/*value={this.state.input.name} we deconstruct it in uder render const */}
                <input name="lastname" onChange = {this.handleChange} value={lastname} type="text" placeholder="last Name"/>
                <input name="email" onChange={this.handleChange} value={email} type="email" placeholder="@Email" />
                <button>Submit</button>
                {/* render a list component, pass into it via props this.state.people, map through each item, and render a person component containing individual info */}
                <List people={people}></List>
            </form>
        )
    }
}
export default Form;