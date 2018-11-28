function Sub(arr){
    var number1= Number(arr[0]);
    var number2= Number(arr[1]);
    result = number1-number2;
    console.log('Subtraction of',number1,'and',number2,'is',result) ;
    
  }
 Sub(process.argv.slice(2));