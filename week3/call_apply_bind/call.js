//call() passes all arguments after the first one on to the invoked function
var obj = {
  x: 81,
  value_of_X: function() {
    return this.x;
  }
};
console.log(obj.value_of_X.call(obj));