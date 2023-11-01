/*const user = {
firstname: 'firstname: Jane',
lastname: 'lastname: Doe',
age: 'age: 18',
email: 'email: joe@u.jdsa',
favouritefilm: 'favouritefilm: it'
}

for (const key in user) {
   console.log(user[key]);
}


function printUser(user) {
   for (const key in user) {
      console.log(`${key}: ${user[key]}`);
   }
}
printUser(user)

let num = {
   a: 1,
   b: 'hello',
   c: 10,
   d: 20
}
function getSum(num) {
   let sum = 0;
   for (const key in num) {
      if(typeof num[key] === 'number') {
         sum += num[key];
      }
   }
   return sum
}
*/
function getPlan() {
const weekPlan = {
   Mon: 'go to work',
   Tue: 'party',
   Wed: 'dantist',
   Thu: 'homework',
   Fri: 'walk',
   Sat: 'lie in bed'
}
   let userInput = prompt('Day of week');
   alert(weekPlan[userInput] || 'Nothing planned')
}