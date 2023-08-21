var get_sunshine = true
var ounces_of_water = 9

if (get_sunshine === true && ounces_of_water >= 10) {
    console.log("The plant will thrive.");
} else if (get_sunshine === true || ounces_of_water >= 10) {
    console.log("The plant needs some help.")
} else {
    console.log("The plant will die.");
}