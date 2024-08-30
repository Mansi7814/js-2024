"use strict"; // treat all JS code as newer version

let num = 30
let stringVar = "Mansi"
let boolean = true
let bigInt = 30000000000000000000000
let numInDec = 3.78
let nullVariable = null
let state;
const symbolVar = Symbol("foo")

console.table([
    ([num,typeof(num)]),
    ([stringVar,typeof(stringVar)]),
    ([boolean,typeof(boolean)]),
    ([bigInt,typeof(bigInt)]),
    ([numInDec,typeof(numInDec)]),
    ([nullVariable,typeof(nullVariable)]),
    ([state,typeof(state)]),
    ([symbolVar,typeof(symbolVar)])
])

//*****************************************************Notes*************************************************************

// alert( 3 + 3) // we are using nodejs, not browser

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object



