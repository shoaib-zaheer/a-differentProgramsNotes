
[Javascript- to learn](https://janke-learning.org/)

>// firstName <= This is camelCase <== Use for plain variables case
>// MY_CONSTANT <= This is UPERCASE =>Constants
>// lat_name <= snake_case =>Not a good practice
>// MonthlyIncome <= PascalCase/ UpperCamelCase => use for JS Classes
.
to see javascript reserved words. <== search it over the internet

```javascript
let firstName = "hakim";
let lastName = "dived";
const GENDER ="Male";

GENDER ="Female"; // Throws an Error in JS

firstName="Luisk";

console.log(firstName + lastName);
````
What is Typescript

````javascript
let firstName ="Ahmad"; // string
let lastName ="Mohmood";
const GENDER = "Male";
let age =32;

firstName="Naeem";

console.log(firstName + lastName);

````
*// console.log(firstName + ' ' + lastName); <== to print space in between name and last name.
// console.log(firstName + "\"" + lastName); <== to print the double comma in between name and last name.//
// console.log(firstName + " " + lastName + "'s gender is" + GENDER);*

````javascript
let firstName ="Ahmad"; // string
let lastName ="Mohmood";
const GENDER = "Male";
let age =32;

firstName="Naeem";

// Is gender different from Male or Females

if (GENDER !== "Male" && GENDER !== "Female"){
throw new Error ('Gender not valid');
}
// || <== This is (OR) operator //
// !== <== This is (different) operator //
// && <== This is (AND) operator 

console.log(firstName + " " + lastName + "'s gender is" + GENDER);
````
*To test the gender uppercase or small case writing.*

````javascript

const UPPERCASE_GENDER =GENDER.toUpperCase();

if (UPPERCASE_GENDER !== 'FEMALE' && UPPERCASE_GENDER !== 'MALE'){
throw new Error ('Gender no valid');
}
console.log)(firstName + ' ' + lastName + '\'s gender is' + GENDER);

````
// here are some creation phase errors to fix
// you'll need to comment out the ones you aren't working on

````javascript
const z = 5;

function (z) {
  return z + z;
};

function rundy (x) {
  return x++;
};

const p = 'these two apostrophes '' are a problem';

cosnt x = 'x';

fucntion roundabout(a, b) {
  return a && b;
};


const 3 = x;
````
###Fixed one

````javascript
const numberFive = 5;

function DubleNumber (z) {
  return z + z;
}

function rundy (x) {
  return x++;
}

const p = 'these two apostrophes \'\' are a problem';

const x = 'x';

function roundabout(a, b) {
  return a && b;
}


const number1 = x;
````
To call a function you have to write the, just we need to write the function name and ();
````javascript
function Ahmad=(x);

`Ahmad();`
````
To check your JavaScript in python checker [click..](http://www.pythontutor.com/javascript.html#mode=display).

#### Asserting & Comparisons

````javascript
// boolean values help to understand console.assert

// if the first argument to console.assert is true, it passes
console.assert(true);

// if the first argument to console.assert is false, it fails
console.assert(false);

// the second argument is the message that will be displayed
// this message must be wrapped in quotes (you'll learn why soon)
console.assert(true, 'this assert passes');
console.assert(false, 'this assert fails');

// PS. open your browser's console!
// In the console, only failing asserts are displayed.
// this is the standard behavior for console.assert
// these slides will also displays passing asserts to help you study

````


````javascript 

// strict equality: ===

// if two values are the same, === evalutes to true:
console.assert(true === true, 'true === true');
console.assert(false === false, 'false === false');

// if they are not, it evaluates to false
console.assert(true === false, 'true === false');
console.assert(false === true, 'false === true');


// strict inequality: !==

// if two values are NOT the same, !== evalutes to true:
console.assert(true !== false, 'true !== false');
console.assert(false !== true, 'false !== true');

// if they ARE the same, it evaluates to false
console.assert(true !== true, 'true !== true');
console.assert(false !== false, 'false !== false');


// multiple comparisons are evaluated left to right
console.assert((false === false) === true, 'false === false === true');
console.assert((false === true) === true, 'false === true === true');
console.assert((false !== true) === true, 'false !== true === true');
console.assert((false === false) !== false, 'false === false !== false');
`````
