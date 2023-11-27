
//Data Types In JavaScript
let a = "mayur"
let b = 1234
let c = true
let d = 12.12


console.log(a)
console.log(typeof a) 

console.log(b)
console.log(typeof b) 

console.log(c)
console.log(typeof c) 

console.log(d)
console.log(typeof d) 

console.log(d==b) //to check only values
console.log(a===b) //to check datatypes

//functions in JavaScript

function validate (name){
    if (name == "jbk"){
        console.log('Welcome To JBK')
    }
    else{
        console.log("Not eligible")
    }
}

validate('jbk') // Calling of the function

//Homework on function in JavaScript

  var x = "js"

function pointgvar(){
    let x = "ts"
    console.log(x)
    
    console.log(window.x)
}

pointgvar()

        