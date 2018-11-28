function fact(arr){
    var number1= Number(arr[0]);
    var a=1;
    var result = 1;
    while(a <= number1)
    {
        result = result * a;
        a++;
    }
    console.log(result);

    }
 fact(process.argv.slice(2));