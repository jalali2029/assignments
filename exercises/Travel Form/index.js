
var form = document.getElementById("submit");
var firstNameInput = document.getElementById("firstName");
var lastNameInput = document.getElementById("lastName");
var ageInput = document.getElementById ("Age");
var selectgender1 =document.getElementById ("Male")
var selectgender =document.getElementById ("Female")
var selectdes = document.getElementById ("Destination")
var Vegetarian =document.getElementById ("Vegetarian")
var Kosher =document.getElementById ("Kosher")
var Lactose =document.getElementById ("Lactose")

var data = {
    firstname: "",
    lastname: "",
    age: "",
    gender:"",
    destination: "",
    restrictions: []

}
firstNameInput.addEventListener("input", function (event){
data.firstname=event.target.value;
console.log(data);
});

lastNameInput.addEventListener("input", function (event) {
    data.lastname = event.target.value;
console.log(data)
});

ageInput.addEventListener("input", function (event) {
    data.age = event.target.value;
   console.log(data)
});

selectgender1.addEventListener("input", function (event) {
    data.gender = event.target.value;
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

function Dietary(event) {
    
    console.log(event.target.name);
    if (event.target.checked) {
        data.restrictions.push(event.target.name);
    } else {
        
        var index = data.restrictions.indexOf(event.target.name)
        data.restrictions.splice(index, 1);
    }
    console.log(data.restrictions);
}

Vegetarian.addEventListener("change", location)
Kosher.addEventListener("change", location)
Lactose.addEventListener("change", location)

form.addEventListener("submit", function () {
    alert("First Name: " + data.firstname + "\n"+
"Last Name: " + data.lastname +"\n"+ "Age: "+data.age+"\n"+"Gender: "+data.gender.value+"\n"+"Destination: "+data.selectdes+
"\n"+"Dietary: "+data.restrictions)
    // console.log(data.firstname);

});
