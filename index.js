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

// How to accept user input

// Easy Way with a window prompt
let username = window.prompt("What's your name?");
console.log(username);

// DIFFICULT WAY HTML textbox
document.getElementById("myButton").onclick = function () {
  const name = document.getElementById("myText").value;
  console.log("This is user input name => " + name);
  document.getElementById("myLabel").innerHTML = "Hello " + name;
};

// Type Conversion = change the datatype of a value to another
//                   (string, numbers, booleans)
let Age = window.prompt("How old are you?");
console.log(typeof Age);
Age = Number(Age);
Age += 1;
console.log("Happy Birthday! You are", Age, "years old");

let x;
let y;
let z;

x = Number("pizza");
y = String(3.14);
z = Boolean("pizza");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

// const = a variable that can't be changed

let pi = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

pi = 420.69;

circumference = 2 * pi * radius;

console.log("The circumference is: => ", circumference);

// Math

let num1 = 3.14;
let num2 = 5;
let num3 = 9;
let maximum;
let minimum;
// num1 = Math.round(num1);
// num1 = Math.floor(num1);
// num1 = Math.ceil(num1);
// num1 = Math.pow(num1, 3);
// num1 = Math.sqrt(num1);
// num1 = Math.abs(num1);
maximum = Math.max(num1, num2, num3);
minimum = Math.min(num1, num2, num3);
num1 = Math.PI;

console.log(num1);

let a;
let b;
let c;

// a = window.prompt("Enter side A");
// a = Number(a);

// b = window.prompt("Enter side B");
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// console.log("Side C:", c);

document.getElementById("submitButton").onclick = function () {
  a = document.getElementById("aTextBox").value;
  a = Number(a);

  b = document.getElementById("bTextBox").value;
  b = Number(b);

  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  document.getElementById("cLabel").innerHTML = "Side C: " + c;
};
