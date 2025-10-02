const coding = ["js" , "ruby" , "java" , "Cpp" , "python"]


// for-each loop
coding.forEach((element) => {
   // console.log(element + " Padho ")
});

function printme(item) {
    //console.log(item)
}
coding.forEach(printme);

coding.forEach((item , index , arr) => {
   // console.log(item,  index , arr)
});

const myCoding = [
    {
        language : "Javascript",
        languageFileName: 'JS'
    },
    {
        language : "C Plus Plus",
        languageFileName: 'C++'
    },
    {
        language : "Python",
        languageFileName: 'py'
    }
]

myCoding.forEach(item => {
    console.log(item.language ,"->", item.languageFileName)
});