import React, { Component } from "react"
import EditForm from "./EditForm";
class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            showRecipe: false,
        }

        this.toggleEdit = this.toggleEdit.bind(this)
        this.showRecipe = this.showRecipe.bind(this)
    }

    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    showRecipe() {
        this.setState({
            showRecipe: !this.state.showRecipe
        })
    }

    render() {
        const { name, ingredients, cooking_direction, removeRecipe, _id, video_url} = this.props;
        const { isEditing } = this.state;
        const { showRecipe } = this.state;
        return (
            <div className="recipe-name">
                <h3 className="show-all-info" onClick={this.showRecipe}> {name} </h3>

                {showRecipe ?
                    <div className="ingredeints-wrapper">
                        <p className="center-p">Ingredients </p>
                        <hr />
                        <ul>
                            {ingredients.split(",").map((ingredient, i) => <li>{ingredient}</li>)}
                        </ul>
                        <label className="cooking-direction-label" htmlFor="cooking-direction">Cooking Direction</label>
                        <div className="p-last-child"><p> {cooking_direction}</p></div>

                        {isEditing ?
                            <EditForm id={_id} name={name} cooking_direction={cooking_direction} ingredients={ingredients} video_url={video_url} />
                            : ""}`
                        <div className="edit-form-btn">
                            <button className="delete-btn" onClick={() => removeRecipe(_id)}>Delete</button>
                            <button className="edit-btn" onClick={this.toggleEdit}>Edit</button>
                            <a href="http://www.facebook.com"><i className="fa fa-facebook-square"></i></a>
                            <a href="http://www.twitter.com"><i className="fa fa-twitter-square"></i></a>
                            <a href="http://www.linkedin.com"><i class="fa fa-linkedin" ></i></a>
                            <a href="http://www.youtube.com"> <i class="fa fa-youtube"></i></a>
                            <a href="http://www.instagram.com"> <i class="fa fa-instagram"></i></a>
                        </div>
                        <div className="youtube-video">
                        <iframe title="video" frameborder="0" allowfullscreen="allowFullScreen" src={video_url}>
                        </iframe>
                        </div>
                    </div> : ""}
            </div>
        )
    }

}
export default Item;