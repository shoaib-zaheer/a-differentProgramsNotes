// Get input element
let filterInput = document.getElementById("filterInput");
// add event listener 
filterInput.addEventListener('keyup', filterNames);
// console.log(1);
// adding function filterName to response.
function filterNames (){
  // get the value of input
  let filterValue = document.getElementById('filterInput').value.toUpperCase();
  // console.log(filterValue);
  // get names ul
  let ul = document.getElementById('names');
  //get items
  let li = ul.querySelectorAll('li.collection-item');

  // loop through collection-item list

  for (let i = 0; i < li.length; i++){
    // get all the <a> tag's (link) elements 
    let a = li[i].getElementsByTagName('a')[0];//[0]to get the current link only
    // if matched what we type with the name inside our list
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {// -1 to check one of the letters we type match one of the letter in list. 
    // if match, we put the CSS style of display to empty 
    li[i].style.display = '';
  } else {
    // if not match, display will be none
    li[i].style.display = 'none';
  }
 }
}