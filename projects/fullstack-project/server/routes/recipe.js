const express = require("express")
const recipeRouter = express.Router();
const RecipeModel = require("../models/recipe.js")
recipeRouter.route("/")

    .get((req, res) => {
        RecipeModel.find(req.query, (err, foundRecipe) => {
            if (err) return res.send(err);
            res.status(200).send(foundRecipe)
        })
    })

    .post((req, res) => {
        const newRecipe = new RecipeModel(req.body);
        newRecipe.save((err, addedRecipe) => {
            console.log("Recipe was saved")
            if (err) return res.send(err)
            res.status(201).send(addedRecipe)
        })
    });

recipeRouter.route("/:id")
    .get((req, res) => {
        RecipeModel.findOne({ _id: req.params.id }, (err, foundRecipe) => {
            if (err) return res.send(err);
            if (!foundRecipe) return res.status(404).send({ message: "not found" })
            res.status(200).send(foundRecipe)
        })
    })

    .delete((req, res) => {
        RecipeModel.findByIdAndRemove({ _id: req.params.id }, (err, deletedRecipe) => {
            if (err) return res.send(err);
            if (!deletedRecipe) return res.status(404).send({ message: "does not exist" })
            res.status(204).send()
        })
    })
    .put((req, res) => {
        RecipeModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, updatedRecipe) => {
            if (err) return res.send(err)
            if (!updatedRecipe) return res.status(404).send({ message: "Recipe not Found" })
            res.status(200).send(updatedRecipe)
        })
    })
module.exports = recipeRouter;