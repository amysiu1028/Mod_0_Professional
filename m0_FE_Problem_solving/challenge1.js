// include comments showing the **overall goal** in your own words, your **pseudocode**, and your **final solution**. 

// 1. Given an array of strings, print only the strings that have exactly 4 characters.


// **overall goal** 
//printing out strings of an array that have only 4 characters

// **pseudocode**
// first we are going to create an object array 
// then for loop into that array at every index array[i]
// within the code block write conditional if array[i].length = 4 then console.log(array)


// **final solution**. 
var campingArray = ["tent", "fire", "backpack", "smores"];

for (var i = 0; i < campingArray.length; i++) {
    if (campingArray[i].length === 4) {
        console.log(campingArray[i])
    }
}


//mistakes & review: QUESTIONS?
// tried return statement at line 20 return campingArray[i] but return statements are for functions?
// used to end/exit a function & specifies a value to be returned
// when return statement used in a function body, the execution of function is stopped.
//Question: can we not use return statements within a conditional if/else code block? Does the if/else statement have to be within a function in order for us to use return?
// //ANSWER: Yes, return can only be used in a function.
// The other thing to note with return is that it stops the function immediately. As soon as a return occurs, the function ends.
// Looking at your code, the conditional is not the issue. First, you’d need to put the entire for loop in a function. Then, you’ll need to consider how a return will behave in a loop. Once it hits that return on the first iteration, what will happen?

// **can we refactor this**
//yes by turning it into a function:
//first set the array object

var campingTermsArray = ["tent", "fire", "backpack", "smores"];

function campingArray(array) { //array bc it could be any array! Not just campingTermsArray
    for (i=0; i < array.length; i++) {
        if (array[i].length === 4) {
            return console.log(campingTermsArray[i]); //returns new string only equal to 4 characters
        }
    }
}
campingArray(campingTermsArray);
