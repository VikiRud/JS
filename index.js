const user = {
firstname: 'firstname: Jane',
lastname: 'lastname: Doe',
age: 'age: 18',
email: 'email: joe@u.jdsa',
favouritefilm: 'favouritefilm: it'
}
/*
for (const key in user) {
   console.log(user[key]);
}
*/

function printUser(user) {
   for (const key in user) {
      console.log(`${key}: ${user[key]}`);
   }
}
printUser(user)