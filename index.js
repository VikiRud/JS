function month() {
let monthNumber = Number(prompt('Ввидіть номер місяця'));
switch (monthNumber) {
case 1:
case 2:
case 12:{
    alert('Це зима');
    break;
}
case 4:
     case 5: 
     case 3:{
    alert('Це весна');
    break;
}
case 7: 
case 8:
    case 6:{
    alert('Це літо');
    break;
}
case 10:
    case 11: 
    case 9:{
    alert('Це осінь');
    break;
}
default: {
    alert('Це не місяць');
}
}
}