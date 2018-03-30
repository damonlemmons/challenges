

// Functions Practice 1

// Below are exercises in writing functions. Beneath each prompt write the code to fulfill the exercise requirement.

// Exercise 1
// Write a function called marco that logs "polo" to the screen.

function marco(){
  return "polo"
}

// Exercise 2
// Write a function called greeter that takes a name as an argument and logs a greeting with that name to the screen.
function greeter(name) {
  return "Hi " + name;
}

greeter(name)

//function declaration
functon example(arg1, arg2) {
var sum = arg1 + arg2

console.log(arg1, arg2)
return sum
}
//function call
example()
// you can pass through anything - does not have to be what's in the argument part of the declaration

var arg1 = 10
var arg2 = 20
//
//argument is something the function needs in order to do a job


// Exercise 3
// Write a function called oddOrEven that takes an number as an argument and logs whether the number is odd or even.

function oddOrEven(number) {
      if (number % 2 == 0) {
        return ("even")
      }
      else {
        return ("odd")
      }
    }
// Exercise 4
// Write a function called triple that takes an number as an argument and logs the result of that number multiplied by 3.

    function triple(number) {
        return (number * 3)


    }
// Exercise 5
// Write a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

function multiply(a, b) {
return a * b
}

// Exercise 6
// Write a function called divisibleBy that takes two numbers as arguments and logs whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

function divisibleBy(a, b) {
    if (a % b == 0) {
        return (a + " is evenly divisible by " + b)
    }
    else if (a % b !== 0) {
        return (a + " is not evenly divisible by " + b)
    }
}

// Exercise 7
// Consider this variable:
// var product = { name: "chair", price: 14.99 }
// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
var product = { name: "chair", price: 14.99 }
function describeProduct(x) {
    return ("The product is a " + x.name + ". " + "It costs " + "$" + x.price + ".")
}

//wouldn't this be easier.....


function describeProduct(x, y) {
    return ("The product is a " + x + "." + "It costs " + y + ".")
}

// Exercise 8
// Consider this function:
function message(product, inBudget){
if(result) {
  return "Product is within budget"
} else {
  return "Product is beyond budget"
}
}
// And consider this variable:
var product = { name: "OledMonitor", price: 300.00 }
var budget = 275.00
// Write a function checkBudget that takes a product, budget and the message function as arguments, determines whether the product is within budget and returns the result of the message function.

// Exercise 9
// Refactor the previous exercise to replace "Product" in the return to the name of the product.
// For example, checkBudget(product, budget, message) ----> "OledMonitor is beyond budget"

//reverse the letters in a sentence

var sentence = "To Be Or Not To Be"

//function takes in a sentence and returns the sentence reversed
function reverseString(string) {
  //separate sentence into words
var reversed = string.split("")  //looked this up
//this creates an array of words

  //separate each word into individual letters or characters
var index = 0
  while(var index < reversed.length) {
    iterate over each item in the reversed array

  }
// if you hear "of each"
  //reverse the letters of each word

  //reverse the order of words

  //return the reversed sentence


}

//in javascript you can only return one thing at a time

TODO: Add functionality to only reverse 5 or more letters


//parsInt() example
var seven = "7"
var eight = "8"

console.log(typeof seven)

parseInt(seven)

console.log(typeof seven);
