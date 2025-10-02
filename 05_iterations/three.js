
// for-of loop
const arr = [1,2,3,4,5]
for (const ele of arr) {
   // console.log(`value of arr is : ${ele}`)
}

const greetings = "Hello world!"
// for (const great of greetings) {
//     console.log(`Eacg char is ${great}`)
// }

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")

// console.log(map)

for (const [key, value] of map) {
   // console.log(key, value)
    
}

const myObject = {
    'game1':'NFS',
    'game2':'Spiderman'
}

