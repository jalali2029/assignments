var submitForm = document.getElementById("formlist");

submitForm.addEventListener("submit", function (e) {
    e.preventDefault()
})

var addButton = document.getElementById("send")


addButton.addEventListener("click", function () {
    var inputText = document.getElementById("inputBox").value

    var ul = document.getElementById("lists")
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(inputText));
    ul.appendChild(li)
    document.getElementById("inputBox").value=""

var button = document.createElement("button");
button.innerText = "X";
button.addEventListener("click", function (e) {
    ul.removeChild(li)
});

li.appendChild(button);
})


