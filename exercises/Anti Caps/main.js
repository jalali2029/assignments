


function antiCaps(str){
    var Mycase="";
for(var i=0; i<str.length; i++){
    if (str[i]===str[i].toUpperCase()){
        Mycase+=str[i].toLowerCase()
    }else {
        Mycase+=str[i].toUpperCase()
    }
}
return Mycase;
}
// var arr=("ShaFiSkF")
console.log(antiCaps("ShaFiQ"))