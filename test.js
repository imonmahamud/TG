//array traverse and sum the array value by recursive function in javascript
var arr=[1,2,3,4,5,6,7,8]
function arrayTraverseSum(arr,lastIndex){
    if(lastIndex<0){
        return 0
    }
    return arr[lastIndex]+arrayTraverseSum(arr,lastIndex-1)
}
console.log(arrayTraverseSum(arr,arr.length-1))
//this is for array traverse and reverse array by recursive function in javascript
var arr=[1,2,3,4,5,6,7,8,9,10,11,12]
function arrayReverse(arr,firstIndex,lastIndex){
    if(firstIndex>lastIndex){
        return
    }
    var temp=arr[firstIndex]
    arr[firstIndex]=arr[lastIndex]
    arr[lastIndex]=temp
    arrayReverse(arr,firstIndex+1,lastIndex-1)
    return arr
}
console.log(arrayReverse(arr,0,arr.length-1))
// pure function 
//same output for same args until change
//don't conflict another part of the code
function sqr(n){
    return n*n
}
console.log(sqr(2));

