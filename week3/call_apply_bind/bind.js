//It returns a function that is bound to the argument you pass to it when called.
var obj = {
  x: 81,
  value_of_X: function() {
    return this.x;
  }
};
console.log(obj.value_of_X.bind(obj)());
