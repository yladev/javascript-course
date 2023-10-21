console.log("I love Thazin");
console.log("Jason is a boy who loves Iris");

// window.alert("I REALLY LOVE THAZIN");

// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let firstName = "Bro"; // strings
let age = 17; // numbers
let student = true; // boolean

age = age + 1;

console.log("Hello", firstName);
console.log("I am", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

/**
 * arithmetic expression is a combination of...
 * operands (values, cariables, etc.)
 * operators (+ - * / %)
 * that can be evaluated to a value
 * ex. y = x + 5;
 */

let students = 21;
students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
console.log(students);

let extraStudents = students % 2;
console.log(extraStudents);

// augmented assignment operator
let boys = 20;

boys += 1;
boys -= 1;
boys *= 2;
boys /= 2;
console.log(boys);

/**
 * operator precedence
 * parenthesis ()
 * exponents
 * multiplication & division
 * addition & subtraction
 */

let result = 1 + 2 * (3 + 4);
console.log(result);
