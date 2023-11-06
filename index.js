const USERNAMES = ['John', 'Josh', 'Keyli', 'Jane', 'Rick', 'Em', 'Bill', 'Mark', 'Sten'];

function User(name, lastName, email, age, gender) {
    this.name = name; 
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.gender = gender;
}

function generateOneUser() {
    const name = USERNAMES[getRandom(0, USERNAMES.length)];
    let gender = null;
    if(Math.random() > 0.5) {
        gender = 'Male';
    } else {
        gender = 'Female';
    }
    const user = new User(name, 'Doe', `mail${getRandom(0, 100)}@mail.com}`, getRandom(10, 100), gender)
    return user;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUsersArray(dimension) {
    const arr = new Array(dimension);
    for(let i = 0; i < arr.length; i++) {
        arr[i] = generateOneUser();
    }
    return arr;
}


const users = getUsersArray(50);


users.forEach(function(u) {
    u.isSubscribe = Math.random() > 0.5;
})

const fullNames = users.map(function(u){
    return `${u.name} ${u.lastName}`
})

const adultUsers = users.filter(function (u) {
    return u.age >= 18;
})

users.sort(function(u1, u2){
    return u1.name > u2.name ? 1 : -1;
})

const getSubscrEmails = users.map(function(u){
    if(u.gender === 'Female' && u.isSubscribe) {
        return u.email
    }
}).filter(mail => mail);