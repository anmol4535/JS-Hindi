// function definition

function sayMyName() {
    console.log('A')
    console.log('B')
    console.log('C')
}

// call a function
// sayMyName()

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2)
// }

// const result = addTwoNumbers(3,null)

// console.log("Result: " , result) .// this will give undefined because function does not give anything

function addTwoNumbers(number1 , number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3,null)

console.log("Result: " , result) 

// another way to give parameter
function loginUserMessage(username= "sam") {
    if(username === undefined) return "Please enter a userName"
    return `${username} just logged in`
}

console.log( loginUserMessage("Anmol"))
console.log(loginUserMessage())

function claculateCartPrice(...num1) { // REST operator
    return console.log(num1)
}

function claculateCartPrice(val1 , val2, ...num1) { // REST operator
    return console.log(num1)
}

//claculateCartPrice(200 , 400 , 600,800)

const user = {
    username: "Anmol",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
