const express = require("express");
const bodyParser = require("body-parser");
const inventoryRouter = require("./routes/inventory.js")
const mongoose = require("mongoose");
const app = express();
const port = 8080;
app.use(bodyParser.json());

app.use("/inventory", inventoryRouter)
mongoose.connect("mongodb://localhost:27017/CrudStore", (err) => {
    if (err) console.error(err);
    console.log("connected to MongoDB")
})

app.listen(port, () => console.log(`Server running on port${port}`))
