// 1. Write a method or function that removes all instances of the letter 
//<strong>s</strong> in a string. The method or function should accept a
//  string as an argument and return the same string with every 
// instance of the letter <strong>s</strong> removed.


// **overall goal** 
//
// **pseudocode**
//create string that includes <strong>s</strong>
//create function(string) - function that accepts the string
//in code block 
//use if statement if (str.includes( <strong>s</strong>)) {str.replace with nothing}



// // **final solution**. 

// function apple(string) {
//   return string.replaceAll("s","")
// }
// console.log(apple( "suffering sassafras"))

//0: stringS = ay
//1: stringS = ay


var word1 = "sassy"

function replaceS(word) {
  newWord = word.replaceAll("s",""); 
  return newWord;
}
console.log(replaceS(word1))



var string = "suffering sassafras"
var remove = "s"
function apple(string, remove){
  return string.replaceAll("s","")
}
console.log(apple(string, "s"))


// **can we refactor this**

// function removeCharacter() {
//     let originalString = "GeeksForGeeks";
//     newString = originalString.replace("G", "");
//     console.log(newString);
// }
 
// removeCharacter();