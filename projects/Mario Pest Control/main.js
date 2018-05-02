document.pestControl.addEventListener("submit", findAmount);



function findAmount(event) {
   event.preventDefault();
   var form = document.getElementById("form");
   var goombas = document.getElementById("goombasAmount").valueAsNumber;
   var bobOmbs = document.getElementById("bobOmbsAmount").valueAsNumber;
   var cheepCheep = document.getElementById("cheepCheepsAmount").valueAsNumber;
   var showAmount = document.getElementById("showAmount");
   
   result = ((goombas * 5) + (bobOmbs * 7) + (cheepCheep * 11));
   showAmount.innerHTML = ("Total Amount is = " + result);
  form.reset();
  
}