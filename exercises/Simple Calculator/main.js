function add() {
    event.preventDefault();
    addForm = document.addition;
    var paragraph = document.getElementById("additionoutput");

    var num1 = addForm.num1.valueAsNumber;
    var num2 = addForm.num2.valueAsNumber;
    var sum = num1 + num2;

    paragraph.innerHTML += sum;
    return sum;

}

document.addition.addEventListener("submit", add);
function ad(){
    document.getElementById("addition-form").reset();
    document.getElementById("additionoutput").innerHTML = "";
}
function subtract() {
    event.preventDefault()
    subForm = document.subtraction;
    var paragraph = document.getElementById("subtractionoutput");
    var num1 = subForm.num1.valueAsNumber;
    var num2 = subForm.num2.valueAsNumber;
    var sub = num1 - num2;
    paragraph.innerHTML += sub;
    return sum;

}
document.subtraction.addEventListener("submit", subtract);
function sub(){
    document.getElementById("sub-form").reset();
    document.getElementById("subtractionoutput").innerHTML = "";
}
function multiply() {
    
        event.preventDefault();
        
        multiplyForm = document.multiplication;
        var paragraph = document.getElementById("multiplicationoutput");


        var num1 = multiplyForm.num1.valueAsNumber;
        var num2 = multiplyForm.num2.valueAsNumber;
        var product = num1 * num2;

        paragraph.innerHTML+=product;
        return product;
    }

    document.multiplication.addEventListener("submit", multiply);

    function mul(){
        document.getElementById("multiply-form").reset();
        document.getElementById("multiplicationoutput").innerHTML = "";
    }
    