console.log("Mansi");

let variable1 = "One"
const variable2 = "Two"
let variable3 = variable2

//variable2 = "three" -- not allowed

variable3 = "three"

console.log(variable1,variable2, variable3);

console.table([variable1,variable2,variable3])

console.log(variable1.indexOf("e"),variable1.charAt('1'))

//*****************************************************Notes*************************************************************

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

