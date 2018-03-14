// var myName = "John Doe";  
// // console.log(name);  
// function movieCheck(age) {  
//   if(age < 0) {
//     throw "Error cannot be less than 0";
//   } else if(age <= 12) {
//     console.log("You can see PG movies");
//   } else if(age >= 13 && age < 18) {
//     console.log("You can see PG-13 movies");
//   } else if(age >= 18) {
//     console.log("You can see R rated movies");
//   }
// }

// try{
// movieCheck(-1); 
// }catch(err){
//     console.log(err)
// }finally{
//     console.log("ok")
//     console.log("not ok")
// }

function sum(x, y){  
    //check data types first and throw error
    if(typeof x !=="number" || typeof y!=="number"){
        throw "input must be a number"
    }
    return x + y;
  }
  
  try{
      sum("5","2") //this will give us an error throw because it is not a number
  }catch(err){
      console.log(err)
  }

  var user = {username: "sam", password: "123abc"};  
function login(username, password){  
    if (!(user.username!=="sam" && user.password!=="123abc")){
throw "incorrect username or password"
    }else{
        console.log("welcome")
    }
    return user
  //check credentials
}
try{
    login("sam","123abc")
}catch(err){
    console.log(err)
}

 