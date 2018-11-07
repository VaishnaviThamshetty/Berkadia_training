function Add(arr){
    var number1= Number(arr[0]);
    var number2= Number(arr[1]);
    result = number1+number2;
    console.log('Addition of',number1,'and',number2,'is',result) ;
    
  }
 Add(process.argv.slice(2));
