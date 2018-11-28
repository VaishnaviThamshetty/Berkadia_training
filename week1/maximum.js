function max(arr){
    var max= Number(arr[0]);
    var min= Number(arr[0]);
    
    for(i=1;i<arr.length;i++)
    {
        if(max < arr[i+1])
        max = arr[i+1];
        
    }
    for(i=1;i<arr.length;i++)
    {
        if(min > arr[i+1])
        min = arr[i+1];
        
    }
    console.log('maximum element is ' ,max);
    console.log('minumum element is ', min);
    }
 max(process.argv.slice(2));