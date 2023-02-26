// All questions should be printed to your Browser’s console using console.log()

// 1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3,9,23,64,2,8,28,93] //create an array
console.log('ages array: ' + ages); //print array


//console.log('Q1a. Subract the 1st element from the last: ' + (ages[ages.length-1] - ages[0]));//subracts the 1st from last and prints result

// 1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] – ages[0] is not allowed
function subtractAges(data){
    console.log('Subract 1st from last: ', data[data.length-1] - data.slice(0,1));// subtract 1st element using slice from last using length-1, should be 90
}
subtractAges(ages);

//let x = (ages[ages.length-1] - ages[0]); //subract the 1st element from the last
//console.log('Q1a. Subract the 1st element from the last: ' + x); //print the result
// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//ages.push(14);
ages.push(14); // add new age to array, 14
console.log('Ages after adding: ' + ages); //print array with new age
subtractAges(ages)//I think should go in a function but not sure how to make that work?

// 1c. Use a loop to iterate through the array and calculate the average age. 
let totalAge = 0;//created variable to hold the sum of the ages
for (let i = 0; i < ages.length; i++){
    totalAge += ages[i]
};//for loop too iterate through and add the elements of the array
let avg = totalAge / ages.length;//calculate average, should be approximatetly 27
console.log('Average age: ' + avg);
// 2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];//create array, names
console.log(names);//print array to console
// 2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
let namesTotal = 0;//create a variable to hold total
for (let i = 0; i < names.length; i++){ // for loop to iterate array names
    namesTotal += names[i].length; // place the names length inside total variable
}//for loop to iterate through the elements of array and add the length of each element
let averageOfNames = namesTotal / names.length;//created variable to calculate average
console.log('Average length of name: ' + averageOfNames);//print average lenght of names array
// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
console.log('Names array: ' + names.join(' '))//join method to concatenate the names and added spaces
// 3.  How do you access the last element of any array? 
console.log(ages[ages.length-1]); // find last element using length -1, should be 14 

// 4.  How do you access the first element of any array?
console.log(ages.slice(0,1));//using slice to find the element in any part of the index, (start,finisth), this gives index 0

// 5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let names1 = ['shrek','donkey','fiona','lord farquad']; //created array names1
console.log('New Names list: ' + names1); // print to console
let nameLengths1 = []; //create an array
for (let i = 0; i < names1.length; i++){ // for loop to iterate the array names1
    nameLengths1.push(names1[i].length); // using push to place the name lengths into an array
}console.log(nameLengths1); // print to console
// using for loop to iterate through names and log the name lengths
// For example:


// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

// 6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let lengthsTots = 0; // created variable to hold total
for (let i = 0; i < nameLengths1.length; i++){ //for loop to iterate the length of names
    lengthsTots += nameLengths1[i]; // add lengths to total variable
}
let avgLength = lengthsTots / nameLengths1.length;
console.log('Average name lengths: ' + avgLength);

// 7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function myWordXTimes(word, n){ // create function
    return word.repeat(n); // used repeat n times
}
console.log('Word Function: ' + myWordXTimes('hello', 3)); // call and print function to console

// 8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
function fullName(first,last){
    return first + " " + last;
}
console.log("My full name is" + " " + fullName("Jared","Hollingsworth"));


// 9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isAverageGreater(data){
    let totalData = 0
    for (let i = 0; i < data.length; i++){ // for loop to calculate sum of array
    totalData += data[i];}
    let isAvg = totalData / data.length // calcalates average of array
    let isGreater = isAvg > 100 // checks if average is greater than 100
    console.log("the average is greater than 100: " + isGreater) // print results to console
}
let myNumbers = [10,15,17]; // create an array
console.log('these are my numbers: ' + myNumbers); // print array to console
isAverageGreater(myNumbers); // call theb function
// function isGreaterThan100(data){
//     let totalData = 0
//     for (let i = 0; i < data.length; i++){
//         totalData += data[i];
//         let avgData = totalData / data.length;
//         return avgData > 100
//         }
//     }
// let myNumbers = [100,140,150];
// console.log('These are my numbers:' + ' ' + myNumbers);
// console.log('The average of my numbers is greater than 100:' + ' ' + isGreaterThan100(myNumbers));
// 10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.
function avgOfElements (data){
    let totalData = 0
    for (let i = 0; i < data.length; i++){ // for loop to calculate sum of array
    totalData += data[i];}
    return totalData / data.length // calcalates average of array
    }
console.log('This is the average of the array: ' + avgOfElements([15,17,3,29]));
// 11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compare2Arrays(a,b) { // created higher function
    function avg1(a) { //function to find the average of 1st array
        let totalA = 0; // created a variable to hold the total count
        for (let x = 0; x < a.length; x++){; // for loop to calculate sum of array
        totalA += a[x];} // adds the elements in the array
        return totalA / a.length; // calcalates average of array
        }

    function avg2(b) { // function to find average of 2nd array
        let totalB = 0; // variable to hold sum of 2nd array
        for (let y = 0; y < b.length; y++){; // for loop to calculate sum of array
        totalB += b[y]}; // adds the elements in the array
        return totalB / b.length; // calcalates average of array
        }
    return avg1(a) > avg2(b);
    }
 
let a = [130,101,160] // create 1st array
console.log('This is the 1st array: ' + a) // log 1st array
let b = [12,37,55] // create 2nd array
console.log('This is the 2nd array: ' + b) // log 2nd array
console.log('The first array is greater: ' + compare2Arrays(a,b)); // log results of greater than function comparing the averages of 2 arrays
//console.log(compare2Arrays([15,12,53,67],[3,9,10,7]));
// 12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(boolean,money){
    if (boolean = true && money > 10.50){
        return true
    }
}
let isHotOutside = true
let money = 12
console.log('I will buy a drink: ' + willBuyDrink(isHotOutside, money))
// 13.  Create a function of your own that solves a problem. 
let myGuitars = [ // create an array of objects for my guitars
    {
        make: 'Fender',
        type: 'Strat',
        color: 'red'
    },
    {
        make: 'Fender',
        type: 'strat',
        color: 'surf pearl'
    },
    {
        make: 'Fender',
        type: 'strat',
        color: 'silver'
    },
    {
        make: 'Fender',
        type: 'tele',
        color: 'black',
        pickups: 'ss'
    },
    {
        make: 'Shecter',
        type: 'strat',
        color: 'blue'
    },
    {
        make: 'Jackson',
        type: 'bass',
        color: 'black'
    },
    {
        make: 'Fender',
        type: 'bass',
        color: 'blue'
    },
    {
        make: 'Gibson',
        type: 'acoustic',
        color: 'natural'
    },
    {
        make: 'Shecter',
        type: 'bass',
        color: 'black'
    },
];
console.log('These are my guitars:');
console.log(myGuitars); // print to console my array of objects
function howManyMakesGuitars(a){ // creates function to count how many of a specific make of guitars
    let counterA = 0; // variable to store count
    for(let x = 0; x < myGuitars.length; x++){ // for loop to iterate through array
        if (myGuitars[x].make == a) counterA++; // sets make as element and equal to parameter b 
    }
    return counterA // returns counter
}
console.log('How many Fender guitars are in my collection:'); // print to console string
console.log(howManyMakesGuitars('Fender')); // print to console number of Fender guitars // 5
console.log('How many Shecter guitars are in my collection:'); // print to console string
console.log(howManyMakesGuitars('Shecter')); // print to console number of Fender guitars // 2
// function howManyTypesGuitars(b){
//     let counterB = 0;
//     for(let y = 0; y < myGuitars.length; y++){
//         if (myGuitars[y].type == a) counterB++;    
//     }
//     return counterB
// }
// function howManyColorsGuitars(c){
//     let counterC = 0;
//     for(let z = 0; z < myGuitars.length; z++){
//         if (myGuitars[z].color == a) counterC++;    
//     }
//     return counterC
// }



// In comments, write what the function does and why you created it.
// The function counts how many of a particular make of guitars I have in my collection. I created it because I thought it would be fun to do. 


//
//