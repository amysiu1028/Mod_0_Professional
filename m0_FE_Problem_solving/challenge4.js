// 1. Start with an array of hobbies. 
//Print out only the words that end in "ing".

// **overall goal** 
//console.log only words that end with -ing within array
// **pseudocode**
//create an array of hobbies
//use for loop to go through items in array
//within for loop, use if statement for finding if items in array endsWith("ing") then
//print items in array that end with ing

// // **final solution**. 
var hobbyArray = ["paddleboarding", "reading", "art"]

for (var i=0; i < hobbyArray.length; i++) { //for every item in that array
    if (hobbyArray[i].endsWith("ing")) {
        console.log(hobbyArray[i]) //print that hobby array item 
    }
}

// **can we refactor this**
//making a function
var hobArray = ["paddleboarding", "reading", "art"];
function hobbies(array) { //hobby function will accept arrays
    for (var i=0; i < array.length; i++) { //for every item in array
        if (array[i].endsWith("ing")) { //see if it ends with ing
            console.log(array[i]); // if it does, print items that end with ing in 
            //hobArray not return bc return will break out of loop and end function 
            //at the first iteration of the loop. So it ends at paddleboarding
        }
    }
}
//to show this, we have to call the function with the array we want as the argument

hobbies(hobArray);

//Return statement. A return statment will break out of the loop.
//once used, the function ends! So we don't want to return here.
//look at examples of return statements.