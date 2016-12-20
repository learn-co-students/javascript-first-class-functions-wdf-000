function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFunction() {
    console.log("I'm named!");
  }
}

function returnsAnAnonymousFunction() {
  return () => console.log("I'm anonymous.")
}
