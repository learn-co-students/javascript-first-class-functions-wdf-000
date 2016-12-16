function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
 var namedFunction = function hello() {
    console.log("Welcome back!");
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {

  return function() {
    console.log("Hello world!");
  }
  
}
