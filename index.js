//console log & node test to check work 
// callback functions lessons

// functions are objects and they can be invoked

/*
// this is how we pass an object into a function
function iReturnThings (thing) {
    return thing;
  }
  
  iReturnThings({ firstName: 'Brendan', lastName: 'Eich' });
  console.log(iReturnThings({ firstName: 'Brendan', lastName: 'Eich' }))
// ^ simple we know this already
//saying hey we have a function call iReturnthings with one parameter thing & returning that thing
//then we call it and pass an object as an argument
// so when we return thing it will be {firstName: "Brendan", lastName: "Eich"}
*/

/*
//And this is how we pass a function into a function:
iReturnThings(function () { return 4 + 5; });
// => ƒ () { return 4 + 5; }
*/

/*
function iInvokeThings (thing) {
    return thing();
  }
  
  iInvokeThings(function () { return 4 + 5; });
  // => 9
  
  iInvokeThings(function () { return 'Hello, ' + 'world!'; });
  // => "Hello, world!"
  */

  // so what is a callback function??
  //When we pass a function into another function wherein it might be invoked, 
  //we refer to the passed function as a callback.
  //so basically a callback function is a function that is passed as an argument to another function
  //using callback function allows me to to call a function from another function.
  //we may define a callback to execute the appropriate code when the user clicks an element on the page

  function main (cb) {
    console.log(cb());
  }
  
  main(function () { return "After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!"});
  // LOG: After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!
//so what did we do above?
//We passed an anonymous function, function () { return "After I get passed... }, as the lone argument to our invocation of main().
//main() stored the passed-in function in the local cb variable and then invoked the callback function.
//The invoked callback returned its long string, which was console.log()-ed out in main().  

/*
//more examples
function greet (name, cb) {
  return cb(name);
}

greet('Ada Lovelace', function (name) { return 'Hello there, ' + name; });
// => "Hello there, Ada Lovelace"

function doMath (num1, num2, cb) {
  return cb(num1, num2);
}

doMath(42, 8, function (num1, num2) { return num1 * num2; });
// => 336
*/