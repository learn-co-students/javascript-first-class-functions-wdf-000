function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function blah() { };
}

function returnsAnAnonymousFunction() {
  return ( () => {} );
}
