//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//Programmatically subtract the value of the first element in the array from the value in the last element of the array 
//(do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.

let ages = [3, 9, 23, 64, 2, 8, 28, 93]

console.log( (ages[ages.length - 1]) - ages[0]);

//Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

ages.push(102);
console.log( (ages[ages.length - 1]) - ages[0]);

//Use a loop to iterate through the array and calculate the average age. Print the result to the console.

let sum = 0

for (let i = 0; i < ages.length; i++) {
    sum = sum + ages[i];
}

console.log(Math.round (sum/ages.length));

//Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
//Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console. 

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]

let total = 0

for (let i = 0; i < names.length; i++) {
    total = total + names[i].length;
}

console.log(Math.round (total/names.length));

//Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

let namesList = " ";
for (let i = 0; i < names.length; i++) {
    namesList = namesList.concat(names[i]);
    if (i < names.length - 1) {
        namesList = namesList.concat(", ");
    }
}
console.log(namesList);

//Create a new array called nameLengths. Write a loop to iterate over the previously created names array
//and add the length of each name to the nameLengths array.
//For example:

//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array

let nameLengths = names.map(function(element) {
    return element.length
});

console.log(nameLengths);

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

let sumOfLengths = 0
    for (let i = 0; i < nameLengths.length; i++) {
        sumOfLengths = sumOfLengths + nameLengths[i]
    };
console.log(sumOfLengths);

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function repeatedWord(word, n) {
    return(word.repeat(n));
}

console.log (repeatedWord("Hello", 8));

//Write a function that takes two parameters, firstName and lastName, and returns a full name 
//(the full name should be the first and the last name separated by a space).

function fullName(firstName, lastName) {
    return(firstName + " " + lastName);
}

console.log (fullName("Joe", "Black"));

//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let arrayOfNumbers = [4, 23, 50, 32]
function sumOfArray(a) {
    let newTotal = 0;
    for (let i = 0; i < a.length; i++) {
        newTotal = newTotal + a[i]
    };
    if (newTotal > 100) {
        console.log("True"); return true;
    } {
    console.log("False"); return false;
    }
}
sumOfArray (arrayOfNumbers);

//Write a function that takes an array of numbers and returns the average of all the elements in the array.

function averageValue (a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i]
    }; console.log(Math.round(sum/a.length));
    return(Math.round(sum/a.length));
}

averageValue(arrayOfNumbers);


//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array 
//is greater than the average of the elements in the second array.

let firstArray = [14, 27, 64, 22]
let secondArray = [10, 14]
function averageValues (a, b) {
    let sum1 = 0;
    for (let i = 0; i < a.length; i++) {
        sum1 = sum1 + a[i]
    }; 
    let sum2 = 0
    for (let i = 0; i < b.length; i++) {   
        sum2 = sum2 + b[i]
    }; 
    if ((sum1/a.length) > (sum2/b.length)) {
        console.log("True"); return true;
    } {console.log("False"); return false;
}
}

averageValues(firstArray, secondArray);

//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
    return "true";
} {
    return "false";
}
}
console.log(willBuyDrink(false, 11.25));

//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

//Part of my job as librarian involved evaluating the collection for weeding (discards). My function assists in identifying titles for evaluation.

function itemDiscardEvaluation(ytdCircs, yearsInCollection) { //declares the function and sets the parameters.
    if (ytdCircs <= 3 && yearsInCollection > 2) {  //evaluates the arguments passed into the parameters.
        console.log("Pull this item for librarian evaluation."); return "True"; //If both arguments match, prints to console and returns "True"
    } {
    console.log("This item will remain in the collection."); return "False"; //if one/both arguments fail to match, to console and returns "False"
}
}
itemDiscardEvaluation(3, 2.1);
