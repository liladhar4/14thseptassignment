function sumArrayUsingReccurssion(arr, size,sum){
    if(size==0){
        return sum;
    }
    return sumArrayUsingReccurssion(arr, size - 1, sum + arr[size - 1]);

}

let arr=[1,2,3,4,5,6,7,8,9,10];
let size=arr.length;
let sum=0;
console.log(sumArrayUsingReccurssion(arr,size,sum));