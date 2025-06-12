// 1.) [Easy] Create an object named movie with properties for title, director, and releaseYear. Print the title 
// of the movie to the console.
let movie = {
    title: "Housefull 5",
    director: "Tarun Mansukhani",
    releaseYear: 2025
};
console.log(movie.title);


// 2.) [Medium] Write a function called printUserDetails that takes a user object as an argument. The user object 
// will have name, email, and age properties. The function should use object destructuring in its parameters to 
// print a string like: "User's name is [NAME], and they are [AGE] years old."
function printUserDetails({name, age}){
    console.log(`User's name is ${name}, and they are ${age} years old.`);
}
let user = {
    name: "Dolon",
    email: "dolon1234@gmail.com",
    age: 22
};
printUserDetails(user);


// 3.) [Medium] Create an array of user objects. Each object should have an id and a username. Use the find method 
// to find the user with a specific id.
let users = [
    {id: 1, userName: "dolon"},
    {id: 2, userName: "sahaved"},
    {id: 3, userName: "dheemanth"},
    {id: 4, userName: "aditya"},
    {id: 5, userName: "aryan"}
];
let findUser = users.find(function(user){
    return user.id === 1;
});
console.log(findUser);