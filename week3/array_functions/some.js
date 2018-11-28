/*Example1
Returns true if at least one element in this array satisfies the provided testing function.*/
function isGreater(element, index, array) { 
   return (element >= 10); 
} 
var retval = [2, 5, 8, 1, 4].some(isGreater); //checks if atlest one element satisfies the condition
console.log("Returned value is : " + retval ); 

var retval = [12, 5, 8, 1, 4].some(isGreater); 
console.log("Returned value is : " + retval );  


//Example2
function isSmaller(element, index, array) { 
    return (element <= 10); 
 } 
 var retval = [12,15, 18, 11, 14].some(isSmaller); //checks if atlest one element satisfies the condition 
console.log("Returned value is : " + retval ); 

var retval = [12, 5, 8, 1, 4].some(isSmaller); 
console.log("Returned value is : " + retval );  