var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"] 
var count=0;
for (var i=0; i<officeItems.length; i++)

if (officeItems[i]==="computer"){
   count+=1 
}
console.log("Number of Computers are "+count)


var peopleWhoWantToSeeMadMaxFuryRoad = [  
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  for (var i=0; i<peopleWhoWantToSeeMadMaxFuryRoad.age; i++)
  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age>=18){
      console.log("Old Enough")
  } else {
      console.log("not Old Enought")
  }
  for (var i=0; i<peopleWhoWantToSeeMadMaxFuryRoad.length; i++)
  if(peopleWhoWantToSeeMadMaxFuryRoad[i].age>=18){
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+ "is old enough to watch Mad Max")
  }else {
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+ "is not old enough to watch Mad Max")
  }

  var mf;
for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            mf = "He";
        } else {
            mf = "She";
        }
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+ "is old enough."+ mf +" is good to see Mad Max Fury Road.");

    } else {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
            mf = "him";
        } else {
            mf = "her";
        }
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name+ "is not old enough to see Mad Max, so don't let" + mf+ " in");
    }
}

