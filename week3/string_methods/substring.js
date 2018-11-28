/*substring() is similar to slice().
The difference is that substring() cannot accept negative indexes.*/
//Example1
var str = "Kuttu, Uday, Chinna";
var val = str.substring(7, 13);
console.log("The substring after str.substring(7,13) is " +val);

//Example2
var str = "Apple, Banana, Kiwi";
var val = str.substring(9);
console.log("The substring after str.substring(9) is " +val);

