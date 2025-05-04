let arr = [1,54,2,5,7,4,87]
function findSecondLargestNumber(arr){
   let rendel=arr[0]
   let maxCouner=0;

    for(let i=1 ; i< arr.length;i++){
       
        if(arr[i]>rendel){
           maxCouner =rendel,
           rendel =arr[i];
            
        }else{
            maxCouner =arr[i+1]
        } 
       
    } return maxCouner
} console.log(findSecondLargestNumber(arr));

