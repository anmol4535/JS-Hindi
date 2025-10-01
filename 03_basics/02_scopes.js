let a = 40
// const b = 20
// var c = 30

if(true){
    //let a = 10
   // const b = 20
    var c = 30 
}

console.log(a)
//console.log(b)
console.log(c)

// function one() {
//     const username = "Anmol"

//     function two() {
//         const website= "youtube"
//         console.log(username)
//     }
//     console.log(website) // give error 
//     two()
// }

// one()

if(true) {
    const userName = "Anmol"
    if(userName === "Anmol") {
        const website = " youtube"
      //  console.log(userName + website)
    }
   // console.log(website)
}

//console.log(userName)

// +++++++++++++++++++++++++ interesting +++++++++++++++++++++

function addone(num) {
    return num + 1
}

 addone(5)

const addTwo = function(num) {  // Expression ke tarika hai yhea
    return num + 2
}

addTwo(5)

// if you not wrapp a function into a variable then you call function above the fucntion declaration
// but if you declare the function and wrapp it into variable then you cant call the function above the fucntion declaretion