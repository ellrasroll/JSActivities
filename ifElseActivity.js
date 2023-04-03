// // Activity 1
// let Age = 19

// let country = "SA"

// if (Age > 17 & country === "UK")  {
//     console.log("Yes I can serve you")
// } else {
//     console.log("You arn't old enough")
// }

// Activity 2

// let topping = "pineapple"


// switch(topping) {
//     case  "chicken":
//     case  "BBQ sauce":
//     case  "mushroom":
    
//     console.log (` These are important ingredients for my pizza`);
//     break;
    
//     case  "ham":
    
//     case  "cheese":
//     case  "pepperoni":
//     console.log (` I don't mind having ${topping} on my pizza`);
//     break; 
//     case  "pineapple":
       
//     console.log (`${topping} should not be on a pizza`)
// }


// Activity 3

// let password = "liverpool"

// if (password.length <8) { 
//     console.log("Password too short")
// } else { 
//     console.log(password)
// }


// Activity 4
// Create a variable called num.If num is divisible by 3 log “fizz” to the console, if it’s divisible by 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log “fizz buzz” to the console. Otherwise log num to the console.


// let num = 2

// if (num%3 === 0&& num%5 === 0) {
//     console.log("fizzbuzz")
// } else if (num%5 ===0) {
//     console.log("buzz")
// }
// else if (num%3 ===0) {
//     console.log("fizz")
// }
// else {console.log("none")
// }


// Ticket machine


// let age = 65

// if (age < 18) {
//     console.log("Child Ticket")
// } if else ( age > 18) {
//     console.log("Adult Ticket")
// } else (console.log("Over 60 Senior"))


// Activity 5
// Create a variable called num.Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202). 

// let num = 1001

// console.log(num.toString().split("").reverse().join(""))

// if (num.toString().split("").reverse().join("") === num.toString()) {
//     console.log("Number is a palindrone")
// } else {console.log("Not a palindrone")}




// Activity 6
// Create a variable called time, a variable called placeOfWork and a variable called townOfHome. Create an if statement that logs to the console where someone is at times of the day. E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work. 

// let time =(8) ;

// let placeOfWork =  ("Manchester");

// let townOfHome = ("Chester") ; 

// if ( time === 7) {
//    console.log(`At 7 I am in ${placeOfWork}`)

// } else if (time === 8) {
//     console.log(`At 8 Im commuting to ${townOfHome}`)
// }




// Activity 7
// Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the index of a last vowel in the string.


// let myString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi "

// let substr = [myString.lastIndexOf('a'),myString.lastIndexOf('e'),myString.lastIndexOf('i'),myString.lastIndexOf('o'),myString.lastIndexOf('u')];

// console.log(Math.max(...substr));






// Activity 8 
// Create a variable called word that takes a string. Create an if statement that checks if the last letter is the same as the first. If it is return true, otherwise return false. 


// let word = "liverpool";

// if (word.charAt(0) === word.charAt(word.length -1)) {
//     console.log("True");
// } else {
// console.log("False");
// }

// Activity 9 
// Create two variables called num1 and num2.Create an if statement that checks if the result of the sum is even. If it is return the number, otherwise return the numbers multiplied together.

// let num1 = 3;

// let num2 = 10;

// let sum = num1 + num2;

// if (sum %2 === 0) {
//     console.log(sum);
// } else {
//     console.log(num1 * num2);
// }







