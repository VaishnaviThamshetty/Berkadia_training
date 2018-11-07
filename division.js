function Div(arr){
    var number1= Number(arr[0]);
    var number2= Number(arr[1]);
    result = number1/number2;
    console.log('Division of',number1,'and',number2,'is',result) ;
    
  }
 Div(process.argv.slice(2));