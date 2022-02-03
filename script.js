'use strict';

function gessRandomNumner() {

   let randomNumber = Math.floor((Math.random() * 100) + 1);
   console.log(randomNumber);
   
   const isNumber = function (num) {
      return !isNaN(parseFloat(num)) && isFinite(num)
   }

   function getUserNumber() {

      let userNumber = prompt('Введите число от 1 до 100');
      console.log(typeof userNumber);
      
         if (userNumber == null) {
              alert('Игра окончена')
              return
            } 

         if (!isNumber(userNumber)) {
               alert('Введи число');
               getUserNumber()
            } else if (userNumber > randomNumber) {
               alert('Загаданное число больше, введите новое число');
               getUserNumber()
            } else if (userNumber < randomNumber) {
               alert('Загаданное число меньше, введите новое число');
               getUserNumber()
            } else if (userNumber = randomNumber) {
               alert('Поздравляю! Вы угадали!');
            }
         }

   getUserNumber() 

}

gessRandomNumner()