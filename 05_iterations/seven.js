const myNumber = [1,2,3,4,5,6,7,8,9]

// const newNum = myNumber.map((item) => (
//     item+10
// ))


// chaining 
const newNum = myNumber.map((num) => num*10).map((num)=> num+2)
                    .filter((num) => num > 20)
console.log(newNum)