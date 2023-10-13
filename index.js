let goodPassword = 'qwert';
while(true) {
    let userInput = prompt('введіть пароль');
    if(userInput === goodPassword) {
        break;
    }
alert('ви ввели неправильний пароль');
}
console.log('це був правильний пароль');