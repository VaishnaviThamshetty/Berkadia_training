//slice() extracts a part of a string and returns the extracted part in a new string.
//Example1
var str = "JS Operators,JS Datatypes,JS Functions,JS Objects";
var val = str.slice(7, 13);
console.log("The sliced string after str.slice(7, 13) is " +val);
//Example2
var str = "Apple, Banana, Kiwi";
var val = str.slice(-12, -1);
console.log("The sliced string after str.slice(-12, -6) is " +val);
//Example3
var val = str.slice(7);
console.log("The sliced string after str.slice(7) is " +val);
//Example4
var val = str.slice(-12);
console.log("The sliced string after str.slice(-12) is " +val);
