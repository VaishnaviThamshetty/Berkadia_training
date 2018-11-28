//using objects
const obj = {  
  a: 1,
  b: 2,
  c: 3,
  d: 4
}
console.log("Using objects:")
for (let elem in obj) {  
  console.log( obj[elem] )
}


//using string
const string = 'hello';
console.log("Using Strings")
for (let character in string) {  
    console.log(string[character])
}


//properties of an object
console.log("Using properties of an object:")
var person = {fname:"John", lname:"Doe"}; 
var text = "";
for (let x in person) {
    text += person[x];
}
console.log(text);