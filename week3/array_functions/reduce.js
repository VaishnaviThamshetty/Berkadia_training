/*Example1
reduce() method applies a function simultaneously against two values of the array 
(from left-to-right) as to reduce it to a single value.*/
var total = [0, 1, 2, 3].reduce(function(a, b)
{ return a + b; }); 
console.log("total is : " + total );   

//Example2
var total = [ 1, 2, 3].reduce(function(a, b)
{ return a - b; }); 
console.log("total is : " + total );   