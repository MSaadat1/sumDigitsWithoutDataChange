// return the sum of digits without changing data type
// for this coding challenge  mathematical operation like division and modulo will be used
// first lets do it with while loop

function sumOfDigits(num) {
  // store the result
  let result = 0;
  // the loop will continue until the num is bigger than 0 // this is the condition
  while (num > 0) {
    let digit = num % 10; // get the last digit ex: 1234 % 10 = 4
    result += digit; // add the digit which is 4 to result ex: 0 + 4 = 4
    num = Math.floor(num / 10); // this operation removes the last digit from 1234 ex: 1234 / 10 = 123.4
    // and gives us 123 because Math.floor remove the remainder
    // with this operation we can continue our loop to the rest of digit until num is bigger than 0
    // for the second iteration 3 will add to 4 ex: 4 + 3 = 7
    // for the third iteration 2 will add to 3 ex: 4 + 3 + 2 = 9
    // for final iteration 1 will add to 2 ex: 4 + 3 + 2 + 1 = 10
  }
  return result; // return the result
}

console.log(sumOfDigits(1234));

function sumDigitsForLoop(num) {
  let result = 0;
  for (; num > 0; num = Math.floor(num / 10)) {
    // for the for loop we don't have initialization
    // we have condition num > 0 
    // if num is bigger than 0 the body of loop executes if not the loop ends
    let digits = num % 10; // this executes first to extract the last digit of num
    result+= digits; // adds to the result
  }
  // after the body finishes, num = Math.floor(num / 10 )executes
  // after that Go back to step 1 and repeat the process for the rest of digits
  return result;
}

console.log(sumDigitsForLoop(4321));
