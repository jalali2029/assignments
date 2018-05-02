import React from "react"
import { connect } from "react-redux"
import Item from "./Item"
import { removeRecipe } from "../redux/recipe.js"

function List(props) {
    const recipeComponents = props.data.map((recipe, id) =>
        <Item key={recipe._id}{...recipe} removeRecipe={props.removeRecipe} > </Item>)

    return (
        <div>
            {recipeComponents}
        </div>
    )
}
const mapStateToProps = state => {
    return state.recipe;
}
export default connect(mapStateToProps, { removeRecipe })(List)