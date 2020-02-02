
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
