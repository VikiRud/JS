let attempts = 0;
let goodPassword = 'qwert';
while(attempts++ <3) {
    let userInput = prompt('введіть пароль');
    if(userInput === goodPassword) {
        ok();
        break;
    }
alert('ви ввели неправильний пароль');
}
console.log('ідіть геть');
function ok () {
console.log('це був правильний пароль');
}