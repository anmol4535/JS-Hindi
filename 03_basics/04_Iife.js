// Immediately Invoked Function Expression(IIFE)

(function chai() { // named iife
    console.log(`DB connected`)
})();

(()=>{ // unnamed iife
    console.log("Db connect")
})();

((name)=>{
    console.log(`DB connected to ${name}`)
})("Anmol")

// chai()


//  structure of Iife
//(function declaration)(for calling the function , this has to be vacant);

// Global scope ke pollution se problem hiti hai kaee baar, 
// uss global scope ke pollution ko hatane ke liye use karte hai 