/*Example1
Applies a function simultaneously against two values of the array 
(from right-to-left) as to reduce it to a single value.*/
var total = [0, 1, 2, 3].reduceRight(function(a, b)
{ return a + b; }); 
console.log("total is : " + total );   

//Example2
var total = [0, 1, 2, 3].reduceRight(function(a, b)
{ return a - b; }); 
console.log("total is : " + total );   