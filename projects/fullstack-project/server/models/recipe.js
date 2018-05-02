const mongoose = require("mongoose");
const { Schema } = mongoose;
const recipeSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    ingredients: {
        type: String,
        required: true
    },
    cooking_direction: {
        required: true,
        type: String
    },
    video_url:{
        type: String,
        // required: true
    }
    
})
const RecipeModel = mongoose.model("recipe", recipeSchema);
module.exports = RecipeModel