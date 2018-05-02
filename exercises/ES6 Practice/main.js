
//Replace all the vars with let and const
// let name = 'John'  
// const age = 101  
// const pets = ["cat", "dog"]

// const petObjects = []

// for (let i = 0; i < pets.length; i++){  
//   let pet = {type: pets[i]}
//   if (pets[i] === "cat"){
//      name = "fluffy"
//   } else {
//      name = "spot"
//   }
//   pet.name = name
//   petObjects.push(pet)
// }
// console.log(petObjects)

//re-write this .map() using a fat arrow function:

// const vegetables = carrots.map(carrot => {  
//     return {type: carrot, name: "carrot"}
// })



// Write a function that will take location and name and output this if location="Hawaii" and name="Janice":

// Hi Janice!

// Welcome to Hawaii. 

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

const letter =  (name, location) => {
  console.log(`Hi ${name}!

  Welcome to ${location}. 
  
  I hope you enjoy your stay. Please ask the president of ${location} if you need anything. `)
}
letter("Jenice", "hawaii");