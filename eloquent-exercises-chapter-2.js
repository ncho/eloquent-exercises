// Eloquent JavaScript Exercises

/*
 ,_,
(.,.)
(   )
-"-"-
*/

// CHAPTER 2: PROGRAM STRUCTURE

// LOOPING A TRIANGLE

// Code from the book. 
/*
for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}
*/

// Testing
/*
for (let number = 0; number <= 10; number +=1) {
  	console.log(number);
}
*/

// Your code here.
for (let hashtag = "#"; hashtag.length <= 7; hashtag += "#") {
  console.log(hashtag);
}

// ***

// FIZZBUZZ

// Prints numbers 0–100
/*
for (let number = 0; number <= 100; number += 1) {
  console.log(number);
}
*/

// Finds the first number greater than 20 that's also divisible by 7
/*
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
*/

// Exercise code part 1
for (let number = 1; number <= 100; number += 1) {
  if (number % 3 == 0) {
    console.log("Fizz");
  }
  else if (number % 5 == 0) {
    console.log("Buzz");
  }
  else console.log(number);
}

// Exercise code part 2
for (let number = 1; number <= 100; number += 1) {
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz");
  }
  else if (number % 3 == 0 && number % 5 != 0) {
    console.log("Fizz");
  }
  else if (number % 3 != 0 && number % 5 == 0) {
    console.log("Buzz");
  }
  else console.log(number);
}

// Online exercise solution
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

// Had a difficult time understanding how to use || to my advantage
// Didn't think to create a variable separate from number

// ***

// CHESSBOARD
console.log(" " + "#");

for (let n = 1; n <= 64; n++) {
	let output = " " + "#";
	console.log(output);
}

for (let n = 1; n <= 64; n++) {
	let output = " ";
	if (n % 2 == 0) output += "#";
	if (n % 3 == 0) output += " ";
	console.log(output);
}

var myString = "Hello ";
myString += "World";
myString += "!";
console.log(myString);

var nextString = "Hello ";
nextString += "Peril";
nextString += "!";
console.log(nextString);

var solutionString = " ";
solutionString += "#";
console.log(solutionString);

for (let counter = 1; counter <= 64; counter++) {
  let solutionString = "";
  if (solutionString % 2 == 0) {
    solutionString += "#";
  else if (solutionString % 2 != 0) {
    solutionString += " ";
  }
  else console.log(solutionString);
}

let grid = 8;
for (let n = 1; n <= grid * grid; n++) {
  let output = "";
  if (n % 2 != 0) output += " ";
  if (n % 2 == 0) output += "#";
  console.log(output);
}

/* 

for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// → 21

*/ 

for (let n = 1; ; n++) {
  let output = "";
   if (n == 8) {
    console.log(output);
    break;
  }
  else if (n % 2 != 0) {
    output += " ";
  }
  else if (n % 2 == 0) {
    output += "#";
  }
}

/*
let output = "";
output += " ";
output += "#";
console.log(output);
*/

for (let n = 1; n <= 8; n++) {
  let output = "";
  /*
  if (n == 8) {
    console.log(output);
    break;
  }
  */
  if (n % 2 != 0) {
    output += " ";
  }
  if (n % 2 == 0) {
    output += "#";
  }
}
console.log(output);

let string = "";
for (let n = 1; n <= 8; n++) {
  // If I declare string inside the loop, string will become "" each time the loop runs
  // let string = "";
  string += " ";
  string += "#";
}
console.log(string);

/*
let string = "";
for (let n = 1; n <= 8; n++) {
  string += " ";
  string += "#";
}
console.log(string);
*/

let string = "";
for (let n = 1; n <= 64; n++) {
  if (n % 9 == 0) string += "\n";
  if (n % 2 != 0) string += " ";
  if (n % 2 != 0) string += "#";
}
console.log(string);
console.log(string.length);

// A loop inside of a loop
// Line by line, left to right, top to bottom
// Two bindings to track progress
// To know whether to put a space or a hash sign at a given position, test whether the sum of the two counters is even (`% 2`)
// Terminating a line by adding a newline character must happen after the line has been built up

let bindingOne = "";
let bindingTwo = "";
if (bindingOne + bindingTwo % 2 == 0) 

let string = "";
for (let counter = 1; counter <= 72; counter ++) {
  if (counter % 9 == 0) string += "\n";
  else if (counter % 2 == 0) string += "#";
  else string += " ";
}
console.log(string);


// SOLUTION I CAME UP WITH IN THE PAST WORKING WITH KUNAL
// I struggled with this exercise for a long time when working on it now
// I should have just kept it as simple as possible

var string = "";
var size = 8; 
for (var counter = 1; counter <= ((size + 1) * size); counter++) {
	if (counter % (size + 1) == 0) string += "\n";
	else if (counter % 2 == 0) string += "#";
	else string += " ";
}
console.log(string);
console.log(string.length);

// BOOK SOLUTION

let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
	for (let x = 0; x < size; x++) {
		if ((x + y) % 2 == 0) {
			board += " ";
		} else {
			board += "#";
		}
	}
	board += "\n";
}

console.log(board);