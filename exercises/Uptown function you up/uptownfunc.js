var lyricsList = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"
            ];
// var lyrics
// function sepLyrics (lyrics){
//     var outArr = lyrics.join(" ");
//     return outArr
// }
// console.log(sepLyrics(lyricsList))

// function reverseList (arr){
//     rev=arr.reverse();
//     song=arr.join(" ")
    
//     return song
// }
// console.log(reverseList(lyricsList))

// function everyother (other){
//     var skip = [];

//     for (var i = 0; i < lyricsList.length; i += 2) {
//         skip.push(lyricsList[i]);
    
// }
// return skip
// }
// console.log(everyother(lyricsList))

function everyother (other){
    var skip = [];

    for (var i = 0; i < lyricsList.length; i += 1) {
        skip.push(lyricsList[i]);
    var end=skip.reverse()
}
return end
}
console.log(everyother(lyricsList))