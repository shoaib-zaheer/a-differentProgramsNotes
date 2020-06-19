#### Higher Order functions in javascript /ES6

Javascript is Object oriented programming, but in Javascript there is also function programming.
Higher order functions are those function that have levels of functions in it, in other worlds.

```javascript 
// function that generate other function
function hello (function (){
}){
}
// or function that returns other function

function hello (){
  return function (){
  }
}
```
There are also of function available for javascript `array` where are very useful.
```javascript 
//example

map();
sort();
reduce();
filter();
fill();
``` 
![Pic](higherOrderFunction.jpg)
###### passing a function to a function or returning function to a function.

```javascript 
function sing(callback){
  console.log ('la la la la');
 callback();
}

function dog (){
  console.log ('wof wof wof');
}

//giving the dog function to sing and then execute the dog function.

console.log (sing(dog));
```
```javascript 
function multiplier (x, factor){
return x * factor;
}
// in console

multiplier (9, 9);
```
What if we write a function to return a function.
```javascript
function multiplier (factor){
  return function (x){
  return x * factor;
  }
}
let double = multiplier(2);
let triple = multiplier(3);

console.log(double(2));
// 4
console.log(triple(2));
// 6
```
using arrow function to write the same above code

```javascript 
function multiplier (factor){
  x => x * factor;
}
let double = multiplier(2);
let triple = multiplier(3);
```
```javascript 

const multiplier = factor => x => x * factor;

let double = multiplier(2);
let triple = multiplier(3);

```


> The syntax is not the only difference between arrow and regular functions. An arrow function does not create its own context, while regular ones do. This is something important to keep in mind.

[ReadMore...](https://www.youtube.com/watch?v=H4awPsyugS0&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=5)