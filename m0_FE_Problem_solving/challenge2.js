// 1. Start with an array of strings with a mix of uppercase and
// lowercase letters. Print every word in all lowercase letters.


// **overall goal** 
//print all lowercase letters in an array

// **pseudocode**
//create array with upper and lower case letters
//for loop - to iterate at each index to check if it's lower case or upper case. 
//this will use conditional if/else
//if index is lowercase -> console.log() it
//else -> nothing

// **final solution**. 
var array = ["HAPPY", "estactic", "AWESOME", "rejuvenating"]

for (var i=0; i < array.length; i++) {
    if (array[i] === array[i].toUpperCase()) {
        console.log(array[i]);
    }
}

// **can we refactor this**
//creating a function:
//write a function that returns only upper case strings
//don't need for loop...? you need it because you have a string.
// if/else
//create an array
var words = ["HAPPY", "sad","ENERGETIC"]
//create a function that uses arrays as a parameter.
function filterDownToUpperCase(array) {
    for (var i=0; i < array.length; i++) { 
        if (array[i] === array[i].toUpperCase()) {
        return console.log(words[i]);
        }
    }
}

filterDownToUpperCase(words);


//So cooolll!
// for (var i=0; i < array.length; i++) {
//     if (array[i] === array[i].toLowerCase()) {
//         console.log(array[i]);
//     }
// }