// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isNotOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isNotOver25 && isUnique;

// Check five: all numbers divisible by 5
// Similar logic to the isTwoOdd variable 
// but checks for no matches instead of 2 or less.
const isDivBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) == 0;

// Check six: The first number is greater than the last
// Only a single 'greater than' operator is needed.
const fnGreaterThanln = n1 > n4;

// Check seven: perform the given math and store the result
const arithmeticChain = ((n2 - n1) * n3) % n4

// Finally, log the results.
console.log(`The sum of the four numbers is 50 because the check returns: ${isSum50}.`);
console.log(`At least 2 of the numbers are odd because the check returns: ${isTwoOdd}`);
console.log(`None of the numbers are over 25 because the check returns: ${isNotOver25}`);
console.log(`All 4 of the numbers are unique because the check returns: ${isUnique}`);
console.log(`Checks that the numbers clear all prior check returns: ${isValid}`);
console.log(`All numbers are divisible by 5 because the check returns: ${isDivBy5}`);
console.log(`The first number (n1) is greater than the last one (n4) because the check returns: ${fnGreaterThanln}`);
console.log(`Performs the given arithmetic and returns the answer: ${arithmeticChain}`);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);