/*1. Create a variable named input that is equal to any phrase you’d like. This variable will contain the text you want to translate into “whale talk”. */
const input = 'this is a phrase that will be converted to whale talk using loops and arrays in JS';

/*2. Whales only speak in vowels so you need an array of vowels to be extracted from the input variable. Set the array equal to a variable named vowels that will not be updated.

Note: Whales don’t consider “y” a vowel.
 */
const vowels = ['a', 'e', 'i', 'o', 'u'];

/* 3. Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string. */
let resultArray = [];

/*4. Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.
 */
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {

  /* 6. Create a nested for loop inside of the for loop you just wrote. Make the inner loop iterate through the vowels array each time the outer loop runs.

This will enable you to check each letter of input against all the vowels elements during each iteration.
 */
  for (let vowel = 0; vowel < vowels.length; vowel++) {

    /*To check your work, log the iterator numbered position inside the for loop and run your code. This should count the number of characters in your input string.

Comment out this code when you’re ready to move on.
 */
    //console.log('vowel is ' + vowel);

    /*8. Inside the second for loop, write a code block that compares the input letter to every letter in the vowels array. */
    if (input[inputIndex] === vowels[vowel]) {

      /*9. Whales double their e‘s and the u‘s in their language.

Write an if statement that checks if each letter in the input string is equal to 'e'. If so, .push() input[i] to the resultArray. */
      if (input[inputIndex] === 'e') {
        resultArray.push('ee');
      }
      /*10. Next, you want to double the letter u, so you must mimic the code from the last step. Re-create the if statement, but modify it so it pushes the letter u a second time.
 */
      if (input[inputIndex] === 'u') {
        resultArray.push('uu');
      }
    }
  }

  /*7. To check your work, log the iterator number positions inside the inner for loop and run your code. You should see 0 through 4 repeatedly because vowels is 5 elements long. */
 //console.log('inputIndex is ' + inputIndex); 
}

/*11. At the bottom of the program, log resultArray to the console.
 */
console.log(resultArray.join('').toUpperCase());