function dup(arr){
    for(i=0;i<arr.length-1;i++)
    {
        for(j=i+1;j<arr.length;j++)
        {
            if(arr[i]==arr[j])
            console.log('duplicate element is ',arr[i]);

        }
    }
}
 dup(process.argv.slice(2));