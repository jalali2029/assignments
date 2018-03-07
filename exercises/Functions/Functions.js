var Add = function (a,b){
    return a+b
}
Add (5,8)

var Lrg = function (a,b,c){
    // console.log(Math.max(a,b,c))
    return Math.max(a,b,c)

}

Lrg(5,8,4)


function isEven(a) {
    if (a%2 == 0){
    return "Even"

    }else{
		return "Odd"
}
}
isEven(9)

var txt = function (val) {
    if (val.length <= 20) {
        return val + val
    } else if (val.length > 20)
        return val.slice(0, val.length / 2)
}

txt("hello world this is me")


 


