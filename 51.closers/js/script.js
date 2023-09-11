// Closures

function makeMultiplier(multiplier){
  //var multiplier = 2 
function b(){
  console.log('Multiplier from funB is: ' + multiplier);
}
 b();

  console.log('Multiplier is: ' + multiplier);
  return (
    function(x){
    return multiplier * x;
    }
  );
}

var doubleAll = makeMultiplier(3);
console.log(doubleAll(20));