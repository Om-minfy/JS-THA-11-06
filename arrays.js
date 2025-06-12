// 1.) [Easy] Create an array named `colors` with three of your favorite colors.
//   - Add a fourth color to the end of the array.
//   - Add a new color to the beginning of the array.
//   - Print the final array to the console.
let colors = ["Red", "Blue", "Yellow"];
colors.push("Sky Blue");
colors.unshift("Purple");
console.log(colors);


// 2.) [Medium] Given the array let numbers = [10, 20, 30, 40, 50];, use the map method to create a new array where 
// each number is increased by 5.
let numbers = [10, 20, 30, 40, 50];
let increasedNumbers = numbers.map(function(number){
    return number + 5;
});
console.log(increasedNumbers);


// 3.) [Medium] Given the array let scores = [25, 80, 45, 95, 60, 75];, use the filter method to create a new array 
// containing only the scores that are 70 or higher.
let scores = [25, 80, 45, 95, 60, 75];
let higherScores = scores.filter(function(score){
    return score >= 70;
});
console.log(higherScores);


// 4.) [Hard] Use the reduce method on the scores array from the previous question to calculate the average score. 
// (Hint: sum all scores and then divide by the number of scores).
let scoress = [25, 80, 45, 95, 60, 75];
let totalScore = scoress.reduce(function(sum, score){
    return sum + score;
}, 0);
let averageScore = totalScore / scoress.length;
console.log(averageScore);