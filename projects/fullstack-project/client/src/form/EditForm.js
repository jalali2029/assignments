import React from 'react'
import { connect } from "react-redux";
import { editRecipe } from "../redux/recipe.js"

class EditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputs: {
                name: props.name || "",
                ingredients: props.ingredients || "",
                cooking_direction: props.cooking_direction || "",
                video_url: props.video_url || ""
            }
        }
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
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        const { id, editRecipe } = this.props
        editRecipe(id, this.state.inputs)
    }
    
    render() {
        const { name, ingredients, cooking_direction, video_url } = this.state.inputs;
        return (
            <div className="edit-form-div"> <hr style={{marginTop:"10px"}}/>
                <div className="edit-form-body">
                    <form className="edit-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Recipe Name</label>
                        <input className="input-form" onChange={this.handleChange} name="name" value={name} type="text" placeholder="Recipe Name" />
                        <label htmlFor="ingredients">Ingredients</label>
                        <textarea rows="4" cols="80" onChange={this.handleChange} name="ingredients" value={ingredients} type="text" placeholder="Enter Ingredeints, Separated, By Commas"/>
                        <label htmlFor="cooking-direction">Cooking Direction</label>
                        <textarea rows="4" cols="80" onChange={this.handleChange} name="cooking_direction" value={cooking_direction} type="text" placeholder="Cooking Direction" />
                        <label htmlFor="input-video">Video</label>
                        <input className="input-video" onChange={this.handleChange} name="video_url" value={video_url} type="video" placeholder="Video URL" />
                        <label htmlFor="button"></label>
                        <button className="add-recipe" >Save Changes</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default connect(null, { editRecipe })(EditForm)

