// let myName = "elliot" 

// console.log(`Hi, my name is ${myName}`)

// myName = `Not Elliot`

let todaysDate = new Date ().getTime();

let birthDate = new Date("20 March 2022").getTime();

let dateDifference = (todaysDate - birthDate)/(1000 * 60 * 60 * 24);

console.log( ` I have been alive for ${Math.floor(dateDifference) } days`);

