let cat = {
   name:'Sonik',
   haircolor:'grey',
   eyescolor:'blue',
   weight:5,
   age:7,
   eat: function() {
   console.log('ням-ням')},
   run: function() {
      console.log('тыгыдык')},
   meow: function() {
      console.log('мяу')},
}
console.log(cat);
cat.age = cat.age + 1;
console.log(cat);
cat.favoriteFood = 'tune'