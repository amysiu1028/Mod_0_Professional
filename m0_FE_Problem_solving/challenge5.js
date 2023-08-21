// 1. Start with an array of travel destinations.
// Print every travel destination in alphabetical 
//order embedded in a sentence using string interpolation. 
//For example, if the destination is "New York City", 
//print something like "The next place I want to visit is
// New York City!" 

// **overall goal** 
// **pseudocode**
//create an array of travel destinations
//for every item in the travelArray we're going to sort them alphabetically and create a new array.
//then outside of the loop console.log string interperloation of 
// // **final solution**. 
var travelArray = ["India", "France", "China"]; 

for (i=0; i < travelArray.length; i++) {
    newTravelArray = travelArray.sort()
}
console.log(`The next place I want to visit is ${travelArray}`) //if this was in the loop, because i<array.length which is 3, it'll print and run it 3 times.

// **can we refactor this**
//function:
var array1 =  ["India", "France", "China"]; 

function travel(array) {
    for (i=0; i < array.length; i++) {
        newArray = array.sort();
        return console.log(`The next place I want to visit is ${newArray}`);
    }
}
travel(array1);

