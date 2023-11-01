/*const flower = {
   type: 'rose',
   color: 'red',
   height: 20,
   grow: function() {
      this.height += 10
      return this
   }
}
*/

const ladder = {
   currentStep: 0,
   up: function() {
      this.currentStep++;
      return this;
   },
   down: function() {
      this.currentStep--;
      return this;
   }
}