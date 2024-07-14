// Q-1. Write a function that Returns the Reverse order  

//  console.log(reverseString);

//  There are two ways to solve this 
// --1.st way is JS inblit func using --
// STEPS -- 1.Split the String into an array of characters.
// ---------2.Reverse the order of elements in the array.
// ---------3.Join the characters back togrther into a string.

// function reverseString(str){
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("rahul"));  // o/p = luhar

// --2.nd way to using for loops to Creating empty strings.
// STEPS:1.Initialize an empty string to store the reversed string
// ----- 2.Iterate through the characters of the, input string in reverse order.

//  function reverseString(str) {
//   let reversed = "" ;
//   for (let i=str.length-1; i>=0; i--){
//   reversed += str[i];
//   }
//   return reversed;
// }
// console.log(reverseString("Interview, Happy"));

 
//Q-2.Write a function isPalidrom or not.

// A Palidrom is a word that reads the same forword and backword.
 
// STEPS:-1.Reverse the string.
//--------2.Compare the reverse string with the original string

//  function isPalindrom(str) {
//     const reverseStr = str.split("").reverse().join("");
//     return str === reverseStr;
// }
//     console.log(isPalindrom("racecar"));


//Q-3. Write a function to remove the duplicates elements from a Array.

// There are doing two ways---

// const arr = [1,2,3,4,4,5,5,6,7];
// const newArr = [...new Set(arr)];
// console.log(newArr); // removing reaptd numbers 1,2,3,4,5
// 1st is Shortcut method--- using Set (Set method, S-should be captial)
// Set- Which only allows unquie values.
// Steps.1-Convert the array to a set
// ------2-Convert the set back to an array

// function removeDuplicates(arr) {
//   return [...new Set(arr)]; // ... is spread opertor with new keyw.
// }
// console.log(removeDuplicates([1,2,3,4,4,5,6,6]));

// 2nd is long way using for loop

// function removeDuplicates(arr) {
//   // Step-1.Empty Array to store unqiue elements
//   const uniqueElemnts = [];

//   // Step-2.Loop through the input array
//   for (let i = 0; i < arr.length; i++) {
//     // Check if the current elements is
//     // already in the uniqueElemnts array
//     if (uniqueElemnts.indexOf(arr[i]) === -1) {
//       // if not found, push the element
//       // to theunquieElements array
//       uniqueElemnts.push(arr[i]);
//     }
//   }
//   return uniqueElemnts;
// }
// console.log(removeDuplicates([11,12,13,12,14,13]));

// one array are their 1 to 10 iwant to increment  like 11,12,13 like this
// Initialize the array with indices from 0 to 10
// var indices = [1,2,3,4,5,6,7,8,9,10];
// for (var i = 0; i <= 10; i++) {
//     indices.push(i);
// }

// Function to increment the array up to a certain nth number after reaching index 10
// function incrementArrayUpToN(n) {
    // var lastValue = indices[indices.length - 1]; // Get the last value in the array
    // for (var i = lastValue + 1; i <= n; i++) {

    //     indices.push(i); // Increment the last value and add it to the array until reaching the nth number
    // }
// }
// Test the incrementArrayUpToN function As you want upto 10,100,1000..nth number.
// incrementArrayUpToN(15); // Increment the array up to the 15th number after reaching index 10

// Display the resulting array
// console.log(indices);
// const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }


// fizz buzz problms

// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         // Check if the number is divisible by both 3 and 5
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz');
//         }
//         // Check if the number is divisible by 3
//         else if (i % 3 === 0) {
//             console.log('Fizz');
//         }
//         // Check if the number is divisible by 5
//         else if (i % 5 === 0) {
//             console.log('Buzz');
//         }
//         // If the number is not divisible by 3 or 5, print the number itself
//         else {
//             console.log(i);
//         }
//     }
// }
// // Test the function with n = 15
// fizzBuzz(15);


// // a array 1 to 10 then i want to find only even numbers

// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz');
//         } else if (i % 3 === 0) {
//             console.log('Fizz');
//         } else if (i % 5 === 0) {
//             console.log('Buzz');
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz();

// // two approch are their we use for loop, then using if else condn is their even or not

// for (var i = 1; i <= 15; i++) {
//     if (i % 15 === 0) console.log("FizzBuzz");
//     else if (i % 3 === 0) console.log("Fizz");
//     else if (i % 5 === 0) console.log("Buzz");
//     else console.log(i);
// }

// // Find the Longest Word:

// function findLongestWord(str) {
//     const words = str.split(' ');
//     let longestWord = '';
//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 
// // Output: 'jumped'

// // Write a function to reverse an integer.

// function reverseInteger(num) {
//     return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
// }
// console.log(reverseInteger(-123)); 
// // Output: -321

// // https://chat.openai.com/share/af33adf1-a22e-47dc-a123-b680682ae552


// // Find the Factorial:

// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }
// }
// console.log(factorial(5)); // Output: 120


// //Sum of Array Elements:
// //Question: Write a function to find the sum of all elements in an array.
// function sumArray(arr) {
//     return arr.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15



// // Remove Duplicates from an Array:
// // Question: Write a function to remove duplicate elements from an array.
// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]


// //some common JavaScript coding interview questions along with solutions in code toask ChatGpt

// //Find the even nuber 
// const nuber = [1, 2, 3, 4, 5];

// function isEven(nuber) {
//     nuber % 2 === 0;
//     return nuber;
// }

// console.log(isEven(nuber));

//to find even array given array 
let num = [12, 22, 32, 42, 52];

function isEven(num) {
    evennub = " ";
    num % 2 === 0;
    return evennub;
}
console.log(evennub);
