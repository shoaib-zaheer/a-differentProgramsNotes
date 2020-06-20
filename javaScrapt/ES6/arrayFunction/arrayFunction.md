#### Array function: map() and fill() ES6
The `map()` function do not double the property of array but it write the hole array twice.
** In short it return a new array.**

```javascript
let night = [2, 8, 6, 1, 9];
console.log(night);

function doubler (x){
  return x * 2;
}
night.map(doubler);
console.log(night);

// (5) [2, 8, 6, 1, 9]
// (5) [2, 8, 6, 1, 9]
```
but if you want to double the values in side an array, we can write the code as below.

```javascript
let night = [2, 8, 6, 1, 9];
console.log(night);

function doubler (x){
  return x * 2;
}
let doubled = night.map(doubler);
console.log(doubled);

//(5) [2, 8, 6, 1, 9]
//(5) [4, 16, 12, 2, 18]

```
We have an array, we want to map() or double the element of that array, and rewriting that array again with new numbers.

```javascript 
let night = [2, 8, 6, 1, 9];
console.log(night);

function doubler (x){
  return x * 2;
}
night = night.map(doubler);
console.log(night);
```
same code writing it with arrow function
```javascript 
let night = [2, 8, 6, 1, 9];
console.log(night);
night = night.map(x => x * 2);
console.log(night);
```
##### fill()

```javascript
let night = [2, 8, 6, 1, 9];
console.log(night);
night.fill(Math.random());
console.log(night);
```
filling 100 spot array with random numbers

```javascript
night = Array(100).fill().map(Math.random);
console.log(night);
```

[ReadMore...](https://www.youtube.com/watch?v=EnYlhbpzhU4&list=PLRqwX-V7Uu6YgpA3Oht-7B4NBQwFVe3pr&index=6)