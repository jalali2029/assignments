import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_RECIPES":
            return {
                ...state,
                loading: false,
                data: action.recipes
            }

        case "ADD_RECIPE":
            return {
                ...state,
                data: [...state.data, action.recipe]
            }

        case "REMOVE_RECIPE":
            return {
                ...state,
                data: state.data.filter((recipe) => recipe._id !== action.id)
            }

        case "EDIT_RECIPE":
            return {
                ...state,
                data: state.data.map(recipe => {
                    if (recipe._id === action.id) {
                        return { ...recipe, ...action.newRecipe };
                    } else {
                        return recipe
                    }
                })
            }
        case "ERR_MSG":
            return {
                data: action.err
            }
        default:
            return state;
    }
}

// getting request from the Server
export const getRecipes = () => {
    return dispatch => {
        axios.get("/recipe")
            .then(response => {
                dispatch({
                    type: "GET_RECIPES",
                    recipes: response.data
                })
            })
            // error message if the server is down
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    err: "The Requested Data is not available "
                })
            })
    }
}
// function to add Recipe
export const addRecipe = recipe => {
    return dispatch => {
        axios.post("/recipe", recipe)
            .then(response => {
                dispatch({
                    type: "ADD_RECIPE",
                    recipe: response.data
                })
            })
            .catch(err => {
                dispatch({ type: "ERR_MSG", err: err.message })
            })

    }
}

//function to remove Recipe
export const removeRecipe = id => {

    return dispatch => {
        const alert = window.confirm("Are you sure you want to delete?")
        if (alert) {
            axios.delete("/recipe/" + id)
                .then(response => {
                    dispatch({
                        type: "REMOVE_RECIPE",
                        id: id
                    })
                })
        }
    }
}

//function to Edit Recipe
export const editRecipe = (id, newRecipe) => {
    return dispatch => {
        const addalert =window.confirm("Are you sure you want to save changes?")
        if(addalert){
        axios.put(`/recipe/${id}`, newRecipe)
            .then(response => {
                dispatch({
                    type: "EDIT_RECIPE",
                    id,
                    newRecipe: response.data
                })
            })
    }
    }

}

export default recipeReducer
