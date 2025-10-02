const myObject = {
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
    
    console.log(`${key} is key-value pair with ${myObject[key]}`)
}


const programming = ["js" , "cpp" , "java" , "py"]

for (const key in programming) {

    
    console.log(programming[key])
}