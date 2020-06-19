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





[*ReadMore*](https://www.youtube.com/watch?v=mrYMzpbFz18)