// 1.) [Easy] Declare a variable named favoriteFood using const and assign it a string value of your favorite food.
// Print it to the console.
const favoriteFood = "Rajma Chawal";
console.log(favoriteFood);


// 2.) [Easy] Create two variables, numA and numB, and assign them number values. Write an if/else statement to 
// print which number is larger or if they are equal.
let numA = 73;
let numB = 87;
if(numA > numB){
    console.log("numA is larger");
} else if(numB > numA){
    console.log("numB is larger");
} else{
    console.log("Both are equal");
}


// 3.) [Medium] Write a for loop that prints the numbers from 1 to 20. For multiples of 3, print "Fizz" instead of 
// the number. For multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
let number;
for(number = 1; number <= 20; number++){
    if(number % 3 === 0){
        console.log("Fizz");
    } else if(number % 5 === 0){
        console.log("Buzz");
    } else if(number % 3 === 0 && number % 5 === 0){
        console.log("FizzBuzz");
    } else{
        console.log(number);
    }
}