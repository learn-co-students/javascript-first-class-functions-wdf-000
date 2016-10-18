function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  return function namedFunc() {
  }
}

function returnsAnAnonymousFunction() {
  return function() {
  }
}
