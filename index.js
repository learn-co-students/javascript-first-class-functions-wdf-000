function receivesAFunction(callback) {
  callback();
}

function named_function() {
  console.log('a named function')
}

function returnsANamedFunction() {
  return named_function
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log('an anonymous function') 
  }
}
