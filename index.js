/*const Array = [5, 4, 3, 2, 1];

for (let i = 0; i < Array.length; i++) {
    console.log(Array[i]);
}


function getSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] === 'number') {
            sum += array[i];
        }
    }
    return sum;
}



function biggest(array) {
    let max = array[0];
    for (let index = 0; index < array.length; index++) {
        if(array[index] > max) {
            max = array[index]
        }
    }
}

function smallest(array) {
    let min = 0;
    for (let index = 0; index < array.length; index++) {
        if(arrey[index] < min) {
            min = array[index]
        }
        
    }
}

*/


function middle(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
        if(typeof array[index] === 'number') {
            sum += array[index];
        }
        }
        return sum / array.length;
    }

