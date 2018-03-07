
var form = document.getElementById("submit");
var nameInput1 = document.getElementById("firstname");
var nameInput = document.getElementById("lastname");
var ageInput = document.getElementById ("age");
var selectgender1 =document.getElementById ("male")
var selectgender =document.getElementById ("female")
var selectdes = document.getElementById ("destination")
var dietry =document.getElementById ("restriction1")
var dietry =document.getElementById ("restriction2")
var dietry =document.getElementById ("restriction3")

var data = {
    firstname: "",
    lastname: "",
    age: "",
    gender:"",
    destination: ""

}
nameInput1.addEventListener("input", function (event){
data.firstname=event.target.value;
console.log(data);
});

nameInput.addEventListener("input", function (event) {
    data.lastname = event.target.value;
console.log(data)
});

ageInput.addEventListener("input", function (event) {
    data.age = event.target.value;
   console.log(data)
});

nselectgender1.addEventListener("input", function (event) {
    data.age = event.target.value;
    console.log(data)
});
selectgender.addEventListener("input", function (event) {
    data.male = event.target.value;
   console.log(data)
});
selectdes.addEventListener("input", function (event) {
    data.female = event.target.value;
    console.log(data)
});

function location(event) {
    
    console.log(event.target.name);
    if (event.target.checked) {
        data.location.push(event.target.name);
    } else {
        
        var index = data.location.indexOf(event.target.name)
        data.location.splice(index, 1);
    }
    console.log(data.location);
}

restriction1.addEventListener("change", location)
restriction2.addEventListener("change", location)
restriction3.addEventListener("change", location)

form.addEventListener("submit", function () {
    alert("First Name: " + data.firstName + "\n")
    console.log(data.firstname);

});
console.log(data)