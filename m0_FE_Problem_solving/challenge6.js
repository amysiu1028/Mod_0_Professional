// 1. Given a sentence with only 
//lowercase letters, print the same sentence
// with the first letter of every word capitalized. 
//For example, if you were given "Turing is the best", 
//return "Turing Is The Best" instead!


// **overall goal** 
//capitalize every word in a string 

// **pseudocode**
//create a string
//split the string into an array of words
//create for loop for array {
//   newstring = string[i][0].toUpperCase()
//}
//console.log(string)) to check
//now we want to join the array into a string


// **final solution**. 
var sentence = "there is a dog barking outside."
var arraySentence = sentence.split(" ") //splits and takes it out
//console.log(arraySentence) - checks that it's a array now
for (var i=0; i < arraySentence.length; i++) {
    arraySentence[i] = arraySentence[i][0].toUpperCase() + arraySentence[i].substr(1); //at every index position 0 in array...
}

console.log(arraySentence.join(" ")) //joins every index element with space b/t



// arraySentence[i][0].toUpperCase()
//will capitalize the first position of index to uppercase (but what about the rest of the string?)
//arraySentence[i].substr(1)
//extracts characters b/t 2 indices, substr(start, end position), in this case, it starts at substr(1, end) and implies to end

// **can we refactor this**
//function:

//write a function that splits string then capitalizize position 0 and adds rest of substring
//join it
var sentence1 = "there is a dog barking outside."
var arraySentence1 = sentence1.split(" ")
// console.log(arraySentence1)
function lowerToUpper(sentence) {
    for (var i=0; i < sentence.length; i++) {
        arraySentence1[i] = arraySentence1[i][0].toUpperCase() +  arraySentence1[i].substr(1);
    }
}
console.log(lowerToUpper(arraySentence1.join(" ")))

//QUESTION:
//Practice functions! WhAT AM I DOING WRONG?


// How to Use split()
// var mySentence = "freeCodeCamp is an awesome resource";
// var words = mySentence.split(" ");
// console.log(mySentence)
// console.log(words)

//question that came up:
//why var object = vs just object =
//google answer: var declares function scoped or globally scoped variables.
//so you can use variable anywhere?
