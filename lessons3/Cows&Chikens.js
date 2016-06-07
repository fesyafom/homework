"use strict"
/*
Проблема Голов и Ног
На ферме проживают курицы и коровы. Это “x” ног и “y” голов. 
Сколько же куриц и коров у нас?
[Головы, Ноги] = [72, 200]
Хороший ответ: [72, 200] => [44, 28] 
[Куриц, Коров]
Не рабочий ответ: [71, 200] => "Нет результата"
Напишите функцию, которая бы работала с разным набором 
данных
function animals(heads, legs){
 //return [Chickens, Cows]
}
*/

var inputHeadsLegs = [71, 200]
var numberChickensCows = []

console.log(animals(inputHeadsLegs[0], inputHeadsLegs[1]))

function animals(heads, legs){
    if ( heads >= 1 ) {	
      if ( legs % 2 === 0 ) {
        if ( legs >= 2 * heads ) {
          if ( legs <= 4 * heads ) {            
            numberChickensCows[0]= 2 * heads - legs / 2
    		numberChickensCows[1]= heads - numberChickensCows[0]
            return numberChickensCows
          }
        }
      }
    } 
  return "Нет результата"
}