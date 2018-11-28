//Length of string
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
console.log("The length of string is :"+sln);

//The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log("The index of locate in string is :"+pos);

//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
console.log("The last index of locate in string is :"+pos);

//If the word doesnt exist then indexOf and lastIndexOf both return -1
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("Vaishu");
console.log("The last index of Vaishu in string is :"+pos);


//The search() method searches a string for a specified value and returns the position of the match:
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");
console.log("The last index of locate in string is :"+pos);

//


