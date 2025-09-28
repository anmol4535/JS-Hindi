const name = "Anmol"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

// another way to declare is 
const gameName = new String('Anmol')
console.log(gameName)

console.log(gameName.charAt(3))
console.log(gameName.indexOf('l'))

const newString = gameName.substring(0,4);
console.log(newString)
const anotherString = gameName.slice(0,4)
console.log(anotherString)

const newStingOne = "   ANmol   Mishra   "
console.log(newStingOne)
console.log(newStingOne.trim())

const url = "https://anmol%20.com"
console.log(url.replace('%20' , '_'));
console.log(url.includes('anmol'))
const sentence = "sdnlc.djsnds.dklkd"
console.log(sentence.split('.' ))