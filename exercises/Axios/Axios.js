var axios = require("axios");
axios.get("http://api.vchool.io/bob/todo").then(function (response) { //to get the api
    console.log(response);
});

axios.post("http://api.vchool.io/bob/todo", {
    title: "newsboy hat"
}).then(function (response) { //to post the api
    console.log(response.data)
});

var todo = document.getElementById("todolist")

//posting
var form = document.getElementById("form");

var inputData = {};
form.addEventListener("submit", function (e) {
    e.preventDefault()
    //set the values of my input onto inputData obj
    inputData.title = e.target.title.value
    inputData.descri = e.target.title.value
    inputData.title = e.target.title.value
    inputData.title = e.target.title.value

    console.log(inputData);
})