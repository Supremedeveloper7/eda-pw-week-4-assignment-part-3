console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// This week we'll be pulling together all of the Javascript techniques you've learned thus far as well as practicing with HTML & CSS.

// ## Topics Covered

// - variables
// - arrays
// - conditionals
// - functions
// - HTML & CSS

// ## Assignment - Cart System 

// In this section we will write some functions that might be used in a simple cart system for a store. 

// ### Required Features
// Update the `cart.js` file to do the following:

// - Create a global variable named `basket` and set it to an empty array.
let basket = [];
console.log( 'basket is:', basket);
// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`. 
//   - return `true` indicating the item was added
function addItem(item){
 console.log( 'in addItem:', item);
 basket.push(item )
 return true
}
addItem('mango');
addItem("strawberry");
addItem('orange');

console.log('Adding items:', addItem(basket));
// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line
function listItem(){
  for( let i = 0; i<basket.length; i++){
    console.log( 'in listItem:',basket[i] );
  }
}
listItem()

// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
function empty(){
 let basket = [];
 return basket;
}
console.log( 'The basket is now:', empty());

// > __IMPORTANT__
// > Make sure that you are writing code *in the file* to test every function that you write!

// For example, to test `addItem`:
// ```
// console.log(`Basket is ${basket}`);
// console.log('Adding apples (expect true)', addItem('apples'));
// console.log(`Basket is now ${basket}`);
// ```