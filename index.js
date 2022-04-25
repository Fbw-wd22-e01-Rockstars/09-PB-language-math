// **Perform Mathematical Tasks with JavaScript. Remember: you must use the `Math` functions and print all results to the console!**

// ## 1. Minimum and maximum

// ### a. Lowest Number

// Print out the lowest number between -1 and 4.

console.log(`the lowest number between -1 and 4 is ${Math.min(-1,4)}`)

// ### b. Highest Number

// Print out the highest number between -1 and 4.

console.log(`the highest number between -1 and 4 is ${Math.max(-1,4)}`)

// ## 2. Rounding

// ### a. Round up

// Round up each of the following numbers to the nearest integer: 3321.32321 , 326.76, 76788.7, -9.78, 43.342.

console.log(`the nearest integer: ${Math.ceil(3321.32321)}`)
console.log(`the nearest integer: ${Math.ceil(326.76)}`)
console.log(`the nearest integer: ${Math.ceil(76788.7)}`)
console.log(`the nearest integer: ${Math.ceil(-9.78)}`)
console.log(`the nearest integer: ${Math.ceil(43.342)}`)


// ### b. Round down

// Round down each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 28.329.

console.log(`the nearest integer: ${Math.floor(3321.92321)}`)


// ## 3. Dice Roll!

// Print a random integer between 1 and 6.

console.log(Math.ceil(Math.random()*6)) // 0.01 - 5.99  // 1-6
console.log(Math.floor(Math.random()*6+1)) // 0.01 - 5.99  // 1-6
console.log(Math.round(Math.random()*(6-1)+1)) // 0.01 - 5.99  // 1-6