function search(arr){
    var number1= Number(arr[0]);
    var arr1 = [1,2,3,4,5,6,7,8,9,10];
    var k=0;
    for (i = 0; i < arr1.length; i++) 
    { 
        if (number1==arr1[i])
        {
        k=1;
        break;
        }
        else
        k=0;
    }
    if(k==1)
    console.log("Element found");
    else
    console.log("Element not found");
}
 search(process.argv.slice(2));