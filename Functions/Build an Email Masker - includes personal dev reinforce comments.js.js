/*
 * REINFORCEMENT: String methods used in this function
 *
 * indexOf("char")  - finds the position of a character, returns a number
 * slice(start,end) - extracts a portion of a string (end is exclusive)
 * repeat(n)        - repeats a string n times
 *
 * Key insight: atIndex is the anchor that makes the function dynamic —
 * it adapts to any email length without hardcoded values.
 */

function maskEmail(email){

const atIndex = email.indexOf("@");                  // position of "@" — the anchor
const firstChar = email.slice(0, 1);                 // first character
const lastChar = email.slice(atIndex - 1, atIndex);  // character just before "@"
const middle = "*".repeat(atIndex - 2);              // stars = total before "@" minus first and last
const domain = email.slice(atIndex);                 // "@" and everything after
  
  return firstChar + middle + lastChar + domain;     // combine all parts
}

const email = "victortavarez23@gmail.com"; // declared outside (test 3)

console.log(maskEmail(email)); // call and log the result