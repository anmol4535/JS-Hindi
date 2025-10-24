// Promise 1
const promiseOne = new Promise(function (resolve, reject) {
    // Simulating an async task
    setTimeout(function () {
        console.log("Async task is complete");
        resolve();
    }, 1000);
});

promiseOne.then(function () {
    console.log("Promise consumed");
});

// Promise 2
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async 2 resolved");
});

// Promise 3
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" });
    }, 1000);
});

promiseThree.then(function (user) {
    console.log(user);
});

// Promise 4
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "hitesh", password: "123" });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => console.log("The promise is either resolved or rejected"));

// Promise 5
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject("ERROR: JS went wrong");
        }
    }, 1000);
});

// Using async/await with try...catch for Promise 5
async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json() // response bhii json mei change hone ke liye time legaa tho await lagana padta hai
//         console.log("Data is: " , data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


// Note : Fetch hamesa ek promise return karta hai

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error)=> {
    console.log(error)
})




// promise ko try catch block and then catch syntax donoo mei likh sakte hai 
// fetch() -> method start the process of fetching a resource from 
// the network, returning a promise which is fulfilled once the esponse is available 