const coding = ["js" , "ruby" , "java" ,"python", "cpp"]

coding.forEach((item) => {
    console.log(item)
    return item
})


 const myNums = [1,2,3,4,5,6,7]

console.log( myNums.filter( (num) => num > 4 ))

const newNums = []

myNums.forEach((item) => {
    if(item > 4) newNums.push(item)
})

console.log(newNums)

