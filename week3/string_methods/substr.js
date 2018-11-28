/*substr() is similar to slice().
The difference is that the second parameter specifies the length of the extracted part.*/
//Example1
var str = "React, Angular, JavaScript";
var val = str.substr(7, 6);
console.log("The substr after str.substr(7,6) is " +val);

//Example2
var str = "React, Angular, JavaScript";
var val = str.substr(7);
console.log("The substr after str.substr(7) is " +val);

//Example3
var str = "React, Angular, JavaScript";
var val = str.substr(-4);
console.log("The substr after str.substr(-4) is " +val);


