// 1.) [Hard] Write a function called `getHighAchievers`. This function should accept two arguments: an array of
// student objects and a `passingScore` number. Each student object will look like this: `{ id: 1, name: 'Alice'
// , score: 85 }`.
// - The function should filter the students to get only those with a score greater than or equal to `passingScore`.
// - It should then use map to return a new array containing only the names of the high-achieving students, in all
// uppercase letters.
// - Example: `getHighAchievers(students, 80)` might return `["ALICE", "BOB"]`.
const student = [
    {id: 1, name: 'Dolon', score: 96},
    {id: 2, name: 'Aditya', score: 68},
    {id: 3, name: 'Sahaved', score: 45},
    {id: 4, name: 'Dheemanth', score: 30},
    {id: 5, name: 'Sameer', score: 14},
    {id: 6, name: 'Tarunika', score: 82}
];

function getHighAchievers(student, passingScore){
    return student.filter(student => student.score >= passingScore).map(student => student.name.toUpperCase());
}

const highAchievers = getHighAchievers(student, 80);
console.log(highAchievers);