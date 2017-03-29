function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function slow(){

  }
}

function returnsAnAnonymousFunction() {
  return function() {

  }
}
