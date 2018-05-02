import React, { Component } from "react"
import { connect } from "react-redux"
import { addRecipe } from "../redux/recipe.js"
// import fruit from "../img/fruit-heart.jpg"

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                name: "",
                ingredients: "",
                cooking_direction: "",
                video_url: ""
            },
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
        const { inputs } = this.state;
        // let {video_url} = inputs;
        // check if ingredients is an empty string
        // dont call addRecipe()
        this.props.addRecipe({...inputs, video_url: inputs.video_url.replace("watch?v=", "embed/")});
        this.setState(this.initialState)
    }
    // https://www.youtube.com/watch?v=Phklq_xDmb4
    // https://www.youtube.com/embed/Phklq_xDmb4

    render() {
        const { name, ingredients, cooking_direction,video_url} = this.state.inputs;
        return (
            <div className="add-form-div">
                <div className="form-body">
                <h1>Add Your Own Recipe Cookbook</h1>
                    
                    <form className="add-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Recipe Name</label>
                        <input className="input-form" onChange={this.handleChange} name="name" value={name} type="text" placeholder="Recipe Name" />
                        <label htmlFor="ingredients">Ingredients</label>
                        <textarea rows="4" cols="20" onChange={this.handleChange} name="ingredients" value={ingredients} type="text" placeholder="Enter Ingredeints, Separated, By Commas" required />
                        {/* render an err message if state.err is true */}
                        <label htmlFor="cooking-direction">Cooking Direction</label>
                        <textarea rows="4" cols="20" onChange={this.handleChange} name="cooking_direction" value={cooking_direction} type="text" placeholder="Cooking Direction" required/>
                        <label htmlFor="input-video">Video</label>
                        <input className="input-video" onChange={this.handleChange} name="video_url" value={video_url} type="url" placeholder="Video URL" />
                        <label htmlFor="button"></label>
                        <button className="add-recipe">Add Recipe</button>
                        
                       <a href="https://www.allrecipes.com/recipes/"><div className="image-div"> <img className= "image" 
                       src="https://i.gifer.com/CB21.gif"
                        alt=""/> 
                         </div></a>
                    </form>
                </div>
            </div>
        )
    }
}
export default connect(null, { addRecipe })(AddForm);