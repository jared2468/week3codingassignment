// All questions should be printed to your Browser’s console using console.log()

// 1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3,9,23,64,2,8,28,93] //create an array
console.log('ages array: ' + ages); //print array


//console.log('Q1a. Subract the 1st element from the last: ' + (ages[ages.length-1] - ages[0]));//subracts the 1st from last and prints result

// 1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] – ages[0] is not allowed

console.log(ages[ages.length-1] - ages.slice(0,1));// subtract 1st element using slice from last using length-1, should be 90

//let x = (ages[ages.length-1] - ages[0]); //subract the 1st element from the last
//console.log('Q1a. Subract the 1st element from the last: ' + x); //print the result
// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//ages.push(14);
ages.push(14); // add new age to array, 14
console.log(ages); //print array with new age
console.log(ages[ages.length-1] - ages.slice(0,1));//I think should go in a function but not sure how to make that work?
//console.log(sub);
//console.log(ages[ages.length-1] - ages.slice(0,1))
// 1c. Use a loop to iterate through the array and calculate the average age. 
// 2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// 2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
// 3.  How do you access the last element of any array? 
console.log(ages[ages.length-1]); // find last element using length -1, should be 14 

// 4.  How do you access the first element of any array?
console.log(ages.slice(0,1));//using slice to find the element in any part of the index, (start,finisth), this gives index 0

// 5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
const names = ["jared", "judy", "lee"];//create new array
console.log(names);//print array to console
const namelengths = [5,4,3];//create new array
console.log(namelengths);//print array
// For example:
//help

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

// 6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 


// 7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).


// 8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.



// 9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.


// 10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.


// 11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.


// 12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.


// 13.  Create a function of your own that solves a problem. 

// In comments, write what the function does and why you created it.






