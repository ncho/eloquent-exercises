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

// Zero is even, one is odd, and for any other number: Subtract by 2 until either zero or one is reached