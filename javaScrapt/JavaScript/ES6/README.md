### [Const](#const) 
### Let vs Var of javascript/ES6 
ES6 short form of ECMA script 2015

`var` using function scope 
`let` and `const` using block scope

```javascript
var x =100;
// var using "function scope"

let x = 100;

// let is using "block scope"
```
###### what is the different between `var` and `let`
##### var
```javascript 
  console.log (x);
  var x = 100;
  console.log (x);

//undefined
//letVsVar.js:4 100
```
##### let
```javascript 
  console.log (x);
  let x = 100;
  console.log (x);

  //letVsVar.js:2 Uncaught ReferenceError: Cannot access 'x' before initialization
  //at letVsVar.js:2

    let x;
  console.log (x);
  x = 100;
  console.log (x);

// letVsVar.js:3 undefined
// letVsVar.js:5 100
```
with `var` the code start to do `hoisting`, which is problematic, 
for every variable it `var` create at the start of function in background defining it separately.

```javascript 
var i, x, y; // here var makes hoisting

for (var i = 0; i < 0; i++){
 /// some stuff runing here
}
x = 'ahmad' + 100;
 if (x > 0){
   y = x + 20;
 }

```
also if we undefined a variable using `var` we can still run the code.
```javascript 
for (var i = 0; i < 100; i++){

}
console.log (i);

//100
```
but with using `let`, system will show an error (i is not defined).
```javascript 

for (let i = 0; i < 100; i++){

}
console.log (i);

// VM829:1 Uncaught ReferenceError: i is not defined
// at <anonymous>:1:13

```
### Const

It just help the efficiency of your code, plus only when your sure that the value of your variable is never every going to be change in your code, you can define your variable using `const`.

**using** `let` 
```javascript 
let i = 50;
undefined
i
50
i = 100;
100
i
100
```
**using** `const`

```javascript 
const i = 50;
undefined
i
50
i = 100;
// VM302:1 Uncaught TypeError: Assignment to constant variable.
//     at <anonymous>:1:3
```
With object when your using `const` you can change the property inside an object but not the object it self.

```javascript
const particle = {x:100, y:100};
//undefined
particle.x = 200;
//200
console.log(particle);
//VM1011:1 {x: 200, y: 100}
// also you can add other property to this object.

particle.z = 50;
//50
console.log(particle);
//VM1155:1 {x: 200, y: 100, z: 50}

```
what if try to change the object it self
```javascript 

particle = {s: 100, d: 100};

//VM1291:1 Uncaught TypeError: Assignment to constant variable.
  //  at <anonymous>:1:10
```
