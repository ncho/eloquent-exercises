// Eloquent JavaScript Exercises

// CHAPTER 2: FUNCTIONS

// ***

// MINIMUM

// Build a function that returns its smallest argument

// Define min to hold a function value
const min = function(a, b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}

// Declare g to be a function
function min(c, d) {
	if (c < d) {
		return c;
	} else {
		return d;
	}
}

// A less verbose function value
min = (e, f) => {
	if (e < f) {
		return e;
	} else {
		return f;
	}
}

// ***

// RECURSION

let h = a => a % 3;

console.log(h(5));

// → 2
// 2 is the remainder of 5 / 3

// Non-recursive solution
function isEven(N) {
	if (N % 2 == 0 && (N - 2) % 2 == 0) {
		return true;
	} else {
		return false;
	}
}

// Non-recursive solution
function isEven(N) {
	while (N % 2 == 0) {
		return true;
	} 
  	return false;
}

// Non-recursive solution
function isEven(N) {
		if (N % 2 == 0) {
			return true;
		} else if (N % 2 == 1) {
			return false;
		} else {
			return false;
		}
}

// Recursive solution
function isEven(N) {
	if (N == 0) {
		return true;
	} else if (N == 1) {
		return false;
	} else {
		return isEven(N - 2);
	}
}

// Zero is even, one is odd, and for any other number: 
// Subtract by 2 until either zero or one is reached

// ***

// BEAN COUNTING

// Count, history
// Go along the length of a string
// Checking if the character in each position is the character "B"
// If character == "B", add number to history

// Check the character using `"string"[N]`
// Does returned value == "B"? 

// Start from the end of the string?
// `string.length - 1` to start from end, make this recursive until… 
// `string.length - 1` < 0

/*
N = string.length - 1
if "string"[N] == "B"
count = count + 1
Recurse, with the next character countBs(string - 1)
return count
*/

function countBs(string) {
	let counter = 0;
	for (index = 0; index < string.length; index++) {

		// If string[index] == "B", counter ++

	}
	return counter;
}


const counter = 0;

function countBs(string) {
	for (index = 0; index < string.length; index++) {	
      	if (string[index] == "B") {
			return counter++
		} else {
          return counter;
		}
    }
}

// Copy pasta
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}