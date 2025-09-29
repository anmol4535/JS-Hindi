// Types of DataTypes-

// Primitive :

// Types: String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.9

const isLogged = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id)
// console.log(anotherId)
// console.log(id === anotherId)

// Reference (Non primitive)

// Array , Objects , Functions


const heros = ["Shaktimann" , "naagraj" ,"doga"];

let myObj = {
    name:"hitesh",
    age:22
}
// console.log(heros)
// console.log(myObj)

const myFunction = function(){
    console.log("Heloo World")
}

myFunction()

//console.log(typeof myFunction)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack Memory - (use in Primitive datatype) 
// Heap memory - (use in Non Primitive datatype)

let myName = "Anmol"
let anotherName = myName

console.log(anotherName)

anotherName = "Mishra";
console.log(myName)

let useone = {
    email:"anmolmishra56113@gmail.com",
    name:"Anmol"
}

let usertwo = useone;
usertwo.email = "mishra@gmail.com"
usertwo.name = "Adarsh"

console.log(useone)