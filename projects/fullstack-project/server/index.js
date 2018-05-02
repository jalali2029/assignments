const express = require ("express");
const bodyParser = require ("body-parser");
const recipeRouter = require ("./routes/recipe")
const mongoose = require ("mongoose")

const app = express()
const port = 8080;
app.use(bodyParser.json())
app.use("/recipe", recipeRouter);

mongoose.connect("mongodb://localhost:27017/Food", (err) => { 
if(err) console.error(err);
console.log("connected to MongoDB")
})

app.listen(port, () => console.log(`Server is Running on port ${port}`))