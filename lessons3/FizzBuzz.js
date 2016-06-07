"use strict"
/*
Напишите программу, которая выводит через console.log все
цифры от 1 до 100, с двумя исключениями. 
Для чисел, нацело делящихся на 3, 
она должна выводить ‘Fizz’, а для чисел, 
делящихся на 5 (но не на 3) – ‘Buzz’.
Когда сумеете – исправьте её так, чтобы она выводила 
«FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
*/

var resultSequence = []
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0 && n % 5 == 0) {
    output += "FizzBuzz";
  } 
  else if (n % 3 == 0) {
    output += "Fizz";
  } 
  else if (n % 5 == 0) {
    output += "Buzz";
  }
  
  resultSequence.push(output || n);
}

console.log(resultSequence)