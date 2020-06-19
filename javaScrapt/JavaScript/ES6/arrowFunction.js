

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