function cat(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

function catLogic () {
    this.eat = function() {
        console.log(`${this.name} is eating`)
    }
    this.run = function() {
        console.log(`${this.name} is running`);
    }
}
const CatsLogic = new catLogic();

cat.prototype = CatsLogic;


