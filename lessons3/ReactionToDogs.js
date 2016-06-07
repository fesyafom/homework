"use strict"
/*
Ваш друг принес щенков, и вы просто не знаете как 
реагировать.  
Возможные реакции: 
var reaction = ["Чего так мало?", "Более чем 
достаточно", "Почему их так много", "Ого, 101 
далматинец!"]; 
 
В каких случаях надо реагировать: 
<= 10   - reaction[0] 
<= 50   - reaction[1] 
<= 100   - reaction[2] 
== 101   - reaction[2] и reaction[3] 
*/

var getQuantityDogs = prompt("Сколько щенков принес друг?", "")
var reaction = ["Чего так мало?", "Более чем достаточно", 
                "Почему их так много", "Ого, 101 далматинец!"];

getQuantityDogs = Number(getQuantityDogs);

alert (howManyAnimals(getQuantityDogs));

function howManyAnimals(number) {
if ( number <= 10 ) {
  return reaction[0];
}
  else if ( number <= 50 ) {
    return reaction[1];
  }
  else if ( number <= 100 ) {
    return reaction[2];
  }
  else if ( number == 101 ) {
    return reaction.slice(2);
  } else {
    return null;
  }
}