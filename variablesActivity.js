// Activity 1
// Create a program that stores someone’s name, age and favourite colour and log it to the console in a complete sentence using Template Literals.

// let Name = "Elliot"

// let Age = "25"

// let favColor = "Yellow"

// // console.log(`My name is ${Name}, I am ${Age} years old and my favourite colour is ${favColor}` )

// Update all of your variables and write out a new sentence underneath your original.

// let Name = "Joe"

// let Age = "22"

// let favColor = "Blue"

// console.log (`My name is ${Name}, My favourite colour is ${favColor} and I am ${Age} years old on tuesday`)

// Activity 2
// Create a program that stores what you eat today for breakfast, lunch and dinner. Log these to the console.

// let breakfast = "Eggs"

// let lunch = "Sandwhich"

// let dinner = "Pasta"

// console.log(`Breakfast - ${breakfast}, Lunch - ${lunch}, Dinner - ${dinner}`)

// Update each of these variables to what you will eat tomorrow. Log these to the console.


// Activity 3
// Create a program that calculates the number of days from today to your birth date.
// Look for ‘Javascript Date’ on MDN

let todaysDate = new Date();

let birthDate = new Date("5th Septmeber 1996");

let timeDiff = todaysDate.getTime() - birthDate.getTime();

let daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 *24));
    
    console.log(`It is ${daysDiff} days until my birthday` );


// Activity 4
// > Create 9 variables: space1, space2... space9> Assign either the value ‘x’, ‘o’,’ ’, to each of these variables.> Insert the variables into your boards using the ${varName} syntax and make it look like the displayed board


// var space1 = `x`;
// var space2 = `o`;
// var space3 = `x`;
// var space4 = `o`;
// var space5 = `x`;
// var space6 = `o`;
// var space7 = `x`;
// var space8 = `o`;
// var space9 = `x`;

// console.log(` ${space1}) | ${space2} | ${space3} `);
// console.log(`-------------`);
// console.log(` ${space4}) | ${space5} | ${space6} `);
// console.log(`-------------`);
// console.log(` ${space7}) | ${space8} | ${space9} `);
