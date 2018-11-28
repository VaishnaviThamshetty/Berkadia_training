function sort(arr){
    var temp;
    for (i = 0; i < arr.length; i++) 
    { 
        for (j = i+1; j < arr.length; j++) 
        {
          if (arr[j] < arr[i])
           {
            temp = arr[i]; 
            arr[i] = arr[j]; 
            arr[j] = temp; 
          } 
        }
    }
    for (i = 0; i < arr.length; i++) 
    {
        console.log(arr[i]);
    }
}
 sort(process.argv.slice(2));