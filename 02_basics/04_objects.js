// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Anmol"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "anmol@gmial.com",
    fullname:{
        userfullname:{
            firstname:"anmol",
            lastname:"mishra"
        }
    }
}

// console.log(regularUser)

// combining the objects

const obj1 = {1:'a' , 2:"b"}
const obj2 = {3:"c" , 4:"d"}

//const obj3 = {obj1 , obj2} // works same as push operator4
// const obj3 = Object.assign({} ,obj1 , obj2) // assign karne ka ek aur tarika

const obj3 = {...obj1 , ...obj2}
// console.log(obj3)

// arr ke ander object kaee sara rakh sakte hoo
const user = [
    {

    },
    {

    }
]

// how to evalue all key and values of an object
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))

// // all entries of an object
// console.log(Object.entries(tinderUser))

// we can ask the object that they have some keys or not
//console.log(tinderUser.hasOwnProperty('isLogged'))


// ++++++++++++ Destructuring +++++++++++++++++

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor:"Anmol"
}

const {courseInstructor: instructor}  = course


console.log(instructor)