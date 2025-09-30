const marvel_heros = ["thor" , "Ironman", "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

// marvel_heros.push(dc_heros) // marvel_heors ke ander dc_heroes as element hojayega
// console.log(marvel_heros)

// const newArr=marvel_heros.concat(dc_heros) // return a new arrsy after concating the two array 
// console.log(newArr)

//  const newArr = [...marvel_heros , ...dc_heros] // spread operator join multiple element or object at same time
//  console.log(newArr)

// const another_Arr = [1,2,3,4,[3,4,5],7,[5,6,[7,8]]];

// const real_another_arr = another_Arr.flat(4)  // open all nested array
// console.log(real_another_arr)

console.log(Array.isArray([1,2,3,4])) // check that the parameter you pass is array or not
console.log(Array.from(("Anmol "))) // create a array using the parameter you pass

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3)) // create a new array after joining the elements
