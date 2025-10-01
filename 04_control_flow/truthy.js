

const userEmail = []

if(userEmail) {
    console.log("Got user email")
} else {
    console.log("Don't have an email")
}

// Falsy values

// false, 0, -0 , BigInt 0n, "" , null , undefined , NaN

// Truthy value

// true ,"0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0) {
    console.log("Array is empty")
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1)

// Terniary Operator

// condition ? true : false

const icePrec = 100
icePrec >= 90 ? console.log("good") : console.log("baad")