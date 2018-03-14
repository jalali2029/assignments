

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

var user = {
    username: "sam",
    password: "123abc"
};

function login(username, password) {
    if (user.username !== username || user.password !== password) {
        throw "incorrect username or password";
        // }else{
        //     console.log("welcome")
        // }
    }
    return "Welcome"
    //check credentials
}
try {
    console.log(login("sam", "123abc"))
} catch (err) {
    console.log(err);
}