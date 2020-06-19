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