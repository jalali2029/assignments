const express = require("express");
const bodyParser = require("body-parser");
const catRouter = require("./routes/bounties.js")


const app = express();

const port = 8080;

app.use(bodyParser.json());

app.use("/bounties", catRouter)
app.listen(port, () => console.log(`Server running on port${port}`))
