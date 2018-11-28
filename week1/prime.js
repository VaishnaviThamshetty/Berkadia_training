function fact(arr){
    var number1= Number(arr[0]);
    var i =2;
    var val =0;
    var result = 1;
    while(i < number1)
    {
        if(number1 %i==0){
            val=1;
            break;}
        else
        {
            val=0;
        }
        i++;
    }
    if(val==0)
    console.log("prime number");
    else
    console.log("not a prime number");

}
 fact(process.argv.slice(2));