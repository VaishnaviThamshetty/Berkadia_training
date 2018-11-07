function Mul(arr){
    var number1= Number(arr[0]);
    var number2= Number(arr[1]);
    result = number1*number2;
    console.log('Multiplication of',number1,'and',number2,'is',result) ;
    
  }
 Mul(process.argv.slice(2));