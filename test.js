// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// Example Input: "hello world" Example Output: "dlrow olleh"


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// Example Input: [2, -5, 10, -3, 7] Example Output: 19


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3


// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)


// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.


// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.


// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.



const reverseString = str => {
    let strArr = [];
    for(let i = str.length - 1; i >= 0; i--){
     let character = str[i];
     strArr.push(character);

    }
    return strArr.join("")
}

console.log(reverseString("hello world"));



const sumOfPositiveNums = arr => {
    let sum = 0;
    for(let nums of arr){
        if(nums > 0){
            sum += nums;
        }
    }
    return sum;
}

console.log(sumOfPositiveNums([2, -5, 10, -3, 7]));





const findMostFrequent = arr => {
    let frequentNums = [];
    const arrWithOutDuplicates = [...new Set(arr)];
    for(let num of arrWithOutDuplicates){
        const findNumsInArr = arr.filter(n => n === num);
        if(findNumsInArr.length > frequentNums.length){
            frequentNums = [...findNumsInArr];
        }
    }
    return frequentNums[0];
}

console.log(findMostFrequent([3, 5, 2, 5, 3, 3, 1, 4, 5]));



const findTwoSumIndices = (arr, targetValue) => {
    let leftI = 0;
    for( let rightI = arr.length - 1; rightI >= 0; ){
        const sum = arr[leftI] + arr[rightI];

        if (sum === targetValue) {
          return [leftI, rightI];
        } else if (sum < targetValue) {
          leftI++;
        } else {
          rightI--;
        }
      }

      return [];
    
}

console.log(findTwoSumIndices([1, 3, 6, 8, 11, 15], 9));


const jsCalculator = (num1, num2, operator) => {
     return operator == "+" ? num1 + num2 : operator == "-" ? num1 - num2 : operator == "*" ? num1 * num2 : operator == "/" ? num1 / num2 : "Provide currect values"
}

console.log(jsCalculator(3, 4, "-"));




const  generateRandomPassword = length => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    return password;
  }
  
console.log("Random Password:", generateRandomPassword(8));



const findSecondSmallestNum = arr => {
    const sortedArr = arr.sort((a, b) => a - b)
    return sortedArr[1]
}

console.log(findSecondSmallestNum([2, 4, 3, 7, 5, 9, 6]));