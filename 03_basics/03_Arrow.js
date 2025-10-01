const user = {
    username:"Anmol",
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to website`);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

function chai() {
    let username="Anmol"
    console.log(this.username) // this will only work in object
}

// const chai = function () {
//     let username = "anmol"
//     console.log(this.username)// this will only work in object
// }

// chai()

// const chai = () => {
//     let user = "Anmol"
//     console.log(this)
// }

// chai()


// Basic arrow functions
// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// // arrow function - Implicit return 
// const addTwo = (num1 , num2) => (
//     num1 + num2
// ) 

const addTwo = (num1 , num2) => ({username:"Anmol"})
console.log(addTwo(4,3))

// if you want to return an object from function then you have to wrap in ()
