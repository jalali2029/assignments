const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");

const app = express();
let todos = require("./todos.js");
const port = 8080;

app.use(bodyParser.json());
app.route("/todos")
    .get((req, res) => {
        res.status(200).send(todos)
    })

    .post((req, res) => {
        const newTodo = req.body;
        newTodo._id = uuid();
        todos.push(newTodo)
        res.status(201).send(newTodo)
    })

app.route("/todos/:id")
    .get((req, res) => {
        const { id } = req.params
        const myTodo = todos.filter(todo => todo._id === id)[0];
        res.status(200).send(myTodo)
    })

    .delete((req, res) => {
        const { id } = req.params;
        todos = todos.filter(todo => todo._id !== id)
        res.status(204).send()
    })

    .put((req, res) => {
        const { id } = req.params;
        let editedTodo = req.body;
        todos = todos.map(cat => todo._id == id ? editedTodo = { ...todo, ...editedTodo } : todo);
        res.status(200).send(editedTodo)
    })
app.listen(port, () => console.log(`Server is running on port${port}`))