#### Arrow Function javascript/ES6

![`explnation of function ES5 VS ES6`](arrowFunction.jpg)

Using function old days :)

```javascript 
function setup(){
  createCanvas (400,400);
  background(0);

  let button = createButton('press');
  button.mousePressed (changeBackground);

  function changeBackground(){
    background(random(255));
  }
}
```
**Second** way of writing the same function :P
```javascript

  let button = createButton('press');
  button.mousePressed (function(){
    background(random(255));
  });
```
##### ES6

```javascript

  let button = createButton('press');
  button.mousePressed ( () => {background (random( 255 )); });

// or event we can make it more shorter by removing {} 

 let button = createButton('press');
  button.mousePressed ( () => background(random(255)));
```
In some cases arrow function can help a lot, one of those example is as per below.
```javascript 
let counter1;

function setup (){
  noCanvas();
  counter1 = new Counter();
}

function draw(){
  counter1.countIt();
}

class Counter {
    constructor (){

    this.count = 0;
    this. p = createP('');
  } 

  countIt(){
    this.count++;
    this.p.html(this.count);
  }
}

```
but if we want to do it as per below, with traditional `function` it will make error but not with arrow `function`.

```javascript 

let counter1;

function setup (){
  noCanvas();
  console.log(this);
  counter1 = new Counter(100, 500);//start at 100 and count every 500 millisecond
}

class Counter {

  constructor (start, wait) {

    this.count = start;
    this. p = createP('');
    console.log(this);
    setInterval (countIt, wait);// it is callback
    
    function countIt() {
      console.log(this);
      this.count++;
      this.p.html(this.count);
  
    }
  }
}
```
Now if we change it to arrow `function`

```javascript
function setup (){
  noCanvas();
  console.log(this);
  const counter1 = new Counter(0, 10);//start at 100 and count every 500 millisecond
  const counter2 = new Counter(500, 50);
  const counter3 = new Counter(1000, 100);

}

class Counter {

  constructor (start, wait) {

    this.count = start;
    this. p = createP('');
    console.log(this);
    setInterval (() => { 
      console.log(this); 
      this.count++; 
      this.p.html(this.count); 
    });// it is callback 
  }
}

```
**Second** way of writing the same `function` & code.
```javascript 
function setup (){
  noCanvas();
  console.log(this);
  const counter1 = new Counter(500, 1000);//start at 100 and count every 500 millisecond
  counter1.start();
  const counter2 = new Counter(200, 500);
  counter2.start();
  const counter3 = new Counter(100, 200);
  counter3.start();
}

class Counter {
  constructor (start, wait) {
    this.count = start;
    this.wait = wait;
    this. p = createP('');
  }

  start(){
      setInterval (() => this.countIt(), this.wait);
  }
      countIt() {
      this.count++; 
      this.p.html(this.count); 
      }
}
```

[*ReadMore*](https://www.youtube.com/watch?v=mrYMzpbFz18)