var numbers = ([1, 2, 3,]);
function sum(total, num) {
 
    return total + num;
}

console.log(numbers.reduce(sum));



var maketItString=([1,2,3]);
function stringConcat(arr ,str) {
    for(var i=0; i<arr.length; i++){
        str[i]+str[i]
    }
return arr+arr
}
console.log(maketItString.reduce(stringConcat))

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
function numAttrs(obj) {
    var count = 0;
    for(var i=0; i<obj.length; i++) {
      if (obj[2].hasOwnProperty===true) {
        count++;
      }
    }
    return count;
  }
  console.log(numAttrs(voters))