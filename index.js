function toBeReceived(){
  console.log('I was called!')
}


function receivesAFunction(toBeReceived){
  toBeReceived();
}


function returnsANamedFunction(){
  function toBeReturned(){
    console.log("Almost Halloween! Boo!")
  }
  return toBeReturned;
}


function returnsAnAnonymousFunction(){
  return function(){
    console.log("I am a stranger");
  }
}