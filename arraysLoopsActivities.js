// Activity 1
// Create an array that lists your favourite films, up to 5 elements.Add 2 more using a methodUse a loop to cycle through the array

// let favouriteFilms = ["John Wick","James Bond", "The Godfather"]

// favouriteFilms.push("The Matrix", "Fight Club");

// for (let i = 0; i < favouriteFilms.length; i++) {
//     console.log(favouriteFilms[i]);
// }





// Activity 2
// Generate 6 random numbers between 1 - 50 and log them to the console using a for loop

// for (let i=0; i < 6; i++) { 
//     const randomNumber = Math.floor(Math.random() * 50 + 1)
//     console.log(randomNumber);
// }


// Activity 3
// If we can create a loop to put 0 - 9 on the screen, how can we count from 9 - 0? Create a program that does this


// for (let i=9; i >= 0; i--) {
//     console.log(i);
// }

// Activity 4
// Displays 4 films stored in an array.Use a for loop to show each film in the arrayUse an if statement to check if the 3rd film in the array is Ghostbusters.If it is, return “Yay its Ghostbusters”. If it isn't return “Boo! We want Ghostbusters”

// let films = ["Wanted", "Split", "Ghostbusters", "Life"]


// for (let i=0; i < films.length; i++) {
//     console.log(films[i]);
// }

// if (films[2] === "Ghostbusters") {
//     console.log("Yay it's Ghostbusters");
// } else {
//     console.log("Boo! We want Ghostbusters");
// }


// Activity 5
// Generate a random number between 1 - 30 six times.For each random number generated, check if this number is divisible by 7 or not.Log out a message to the console if it is divisible by 7 or not.


// for ( i=0; i < 6; i++) {
//     const num = Math.floor(Math.random() * 30 +1); 
//         if (num % 7 === 0) {
//             console.log(`${num} is divisible by 7`);
//         } else {
//             console.log(`${num} is not divisible by 7`);
//         }
//     }  



// Activity 6
// Imagine you’re a programmer for a social media platform! You have been tasked with building a prototype for a mutual followers program.> Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. In these arrays place 4 names as strings. Make sure there are 2 names that are in BOTH arrays.> Using a nested loop iterate over both arrays and console.log out the matching followers


// const bobsFollowers = [ "Joe", "Jane", "Sam", "Linda"]

// const hannahsFollowers = [ "Joe", "Zac", "Sam", "Rebecca"]

// for (i=0; i < bobsFollowers.length; i++) {
//     for (let j = 0; j < hannahsFollowers.length; j++ ) {
//         if (bobsFollowers[i] === hannahsFollowers[j]) {
//             console.log(bobsFollowers[i])
//         }
//     }
// }


// Activity 7 
// Research on do...while loop, find out about the difference between for loop, while loop and do...while loop. Give an example of each. What are the pros and cons?


