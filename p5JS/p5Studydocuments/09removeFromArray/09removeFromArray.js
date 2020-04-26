let timeoutID = setTimeout(bye, 10000);
console.log("hello");

clearTimeout(timeoutID);

function bye(){
  console.log("goodBye");
}