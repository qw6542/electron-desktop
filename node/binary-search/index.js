const array = [1,2,3, 4, 5,6];


function getMiddle(left, right){
    return Math.floor((left+right)/2);
}

function binarySearch(value){
 let res = -1;

 let left = 0;
 let right = array.length - 1;   
 let middle;

if(array[left] == value){
    return left;
}
if(array[right] == value){
    return right;
}

 if(value<array[left] || value> array[right]){
    return res;
 }



 while( left <= right){


    middle = getMiddle(left, right);
    if(array[middle] == value){
        return middle;
    } 

    if(array[middle] < value){
        left = middle + 1;
    } else{

        right = middle - 1;
    }


 }


}

console.log(binarySearch(5));


function f(left, right, x){
 let mid = getMiddle(left, right);

 if (left >= right){
    return -1;
 } 

 if(array[mid] == x){
     return mid;
 }

 if(array[mid] < x){
    return f(mid+1, right, x);
} else {
    return f(left, mid-1, x);

}

}

console.log(f(0, 5, 5));
