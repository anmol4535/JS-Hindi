// object literals

// Most Important for interview perspective
const sym = Symbol("mySym") // defining a symbol

const JsUser = {
    name:"Anmol",
    age: 18,
    [sym]:"my Key",//use symbol as key in object
    location: "Jaipur",
    email: "anmol@google.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday" , "Saturday"]
}

// console.log(JsUser.email)

// console.log(JsUser["email"])
// console.log(typeof JsUser[sym]) // this is syntax to print thesymbol 

// JsUser.email = 'anmol@mishra.com'
// console.log(JsUser)
// Object.freeze(JsUser) // it freezes the object :- the modification is not allowed
// JsUser.email = 'anmol@chatgpt.com'
// console.log(JsUser)

JsUser.greeting = function() {
    return "Namaste jii , kaise hai app log"
}

JsUser.greetingTwo = function() {
    console.log(`Namaste jii , kaise hai app log, ${this.name} `)
}

console.log(JsUser.greeting())
JsUser.greetingTwo()
