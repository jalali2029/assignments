import React, { Component } from "react"

import { connect } from "react-redux"
import { addImage } from "./redux/Images.js"


class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                title: "",
                imgUrl: "",
                discription: ""
            }
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addImage(this.state.inputs)
        this.setState(this.initialState)
        
    }
    render() {
        const { title, imgUrl, discription, } = this.state.inputs;
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} name="title" value={title} type="text" placeholder="Title" />
                <input onChange={this.handleChange} name="imgUrl" value={imgUrl} type="text" placeholder="Image URL" />
                <input onChange={this.handleChange} name="discription" value={discription} type="text" placeholder="Discription" />
                <button>Submit</button>
            </form>
            </div>
        )
    }
}
export default connect(null, { addImage })(Form);