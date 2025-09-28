// DATES

let myDate =  new Date()
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(typeof(myDate))

let myCreatedDate = new Date(1023 , 0 , 23)
console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()

console.log(myTimeStamp.toLocaleString())