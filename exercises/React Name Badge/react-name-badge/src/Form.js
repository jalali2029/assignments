import React, { Component } from 'react'
import List from "./List"

class Form extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            inputs: {
                firstname: props.firstname,
                lastname: props.lastname,
                email: props.email,
                placeofbirth: props.placeofbirth,
                phone: props.phone,
                favoritefood: props.favoritefood,
                comment: props.comment
            },
            people: []
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange(event) {
        const { value, name } = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
    }
    handleSubmit(event) {
        event.preventDefault();

        this.setState(prevState => {
            return {
                inputs: this.initialState.inputs,
                people: [...prevState.people, prevState.inputs]
            }
        })
    }


    render() {
        const { firstname, lastname, email, placeofbirth, phone, favoritefood, } = this.state.inputs;
        const { people } = this.state;
        return (
            <div>
            <div className="myform">
                <form onSubmit={this.handleSubmit}>
                    <input minLength="3" onChange={this.handleChange} name="firstname" value={firstname} type="text" placeholder="First Name" />
                    <input minLength="3" onChange={this.handleChange} name="lastname" value={lastname} type="text" placeholder="Last Name" />
                    <input minLength="3" onChange={this.handleChange} name="email" value={email} type="email" placeholder="Email" />
                    <input minLength="3" onChange={this.handleChange} name="placeofbirth" value={placeofbirth} type="text" placeholder="Place of Birth" />
                    <input minLength="3" onChange={this.handleChange} name="phone" value={phone} type="tel" pattern="^\d{4}-\d{3}-\d{4}$" required placeholder="phone:(xxxx-xxx-xxxx)" />
                    <input minLength="3" onChange={this.handleChange} name="favoritefood" value={favoritefood} type="text" placeholder="Favorite Food" />
                    <textarea minLength="3" onChange={this.handleChange} name="comment" rows="4" cols="69" placeholder="Tell us about yourself" /><br />
                    <button >Submit</button>
                </form><br />
                
            </div>
            <List people={people} />
            </div>


        )
    }
}
export default Form