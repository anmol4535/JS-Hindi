// arrays

// Declarations:
const myArr = [0,2,3,4,5];
const myHeros= ["shaktimann" , "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0])
// console.log(myArr2.length)

// // Array mathods

// myArr.push(6)
// console.log(myArr)

// myArr.pop()
// console.log(myArr)

// myArr.unshift(9)
// console.log(myArr)

// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

const newArr = myArr.join()

// console.log(typeof newArr)
// console.log(typeof myArr)

// slice , splice

const myArrn1 = myArr.slice(1,3)
console.log(myArr)
console.log(myArrn1)

const myArrn2 = myArr.splice(1,3)
console.log(myArr)
console.log(myArrn2)