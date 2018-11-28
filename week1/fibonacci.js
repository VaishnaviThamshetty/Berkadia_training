function fibo(arr){
    var number1= Number(arr[0]);
    var a = 0;
    var b = 1;
    var c;
    while(a<number1)
    {
        console.log(a);
        c = a + b;
        a=b;
        b=c;
    }
    }
 fibo(process.argv.slice(2));