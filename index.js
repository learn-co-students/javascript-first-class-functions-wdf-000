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


// var afterExercise = morningRoutine(liftWeights);
//
// function morningRoutine(exercise) {
//   var breakfast = null;
//
//   if (exercise === liftWeights) {
//     breakfast = 'protein bar';
//   } else if (exercise === swimFortyLaps) {
//     breakfast = 'kale smoothie';
//   } else {
//     breakfast = 'granola';
//   }
//
//   exerciseRoutine(exercise);
//
//   // we could give this function a name if we wanted to,
//   // but since it's only available _inside_ morningRoutine(),
//   // we don't need to
//   return function() {
//     console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//   }
// }
//
// afterExercise();
//
// function runFiveMiles() {
//   console.log('Go for a five-mile run');
// }
//
// function liftWeights() {
//   console.log('Pump iron');
// }
//
// function swimFortyLaps() {
//   console.log('Swim 40 laps');
// }
//
// function exerciseRoutine(postRunActivity) {
//   runFiveMiles();
//   postRunActivity();
// }
//
// function Monday() {
//   exerciseRoutine(liftWeights);
// }
//
// function Tuesday() {
//   exerciseRoutine(function() {
//     console.log('Stretch! Work that core!');
//   });
//   exerciseRoutine(() => {
//     console.log('Stretch! Work that core!');
//   });
//   exerciseRoutine(() => console.log('Stretch! Work that core!'));
// }
//
// function Wednesday() {
//   exerciseRoutine(runFiveMiles);
// }
//
// function Thursday() {
//   exerciseRoutine(liftWeights);
// }
//
// function Friday() {
//   exerciseRoutine(swimFortyLaps);
// }
