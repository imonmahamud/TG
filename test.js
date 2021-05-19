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
//we can also do that
var result =sqr(5)
console.log(result); 

//simple implementation of foreach function
var array=[1,2,3,4,5,6]
var result =0
array.forEach(function(value) {    
    result+=value 
    
})
console.log(result);
//function for add .........................
function add(a,b){
    return a+b;
}
console.log(add(4,5));
//Return function example here
function greeting(msg){
    return function (name) {
        console.log(msg + " " + name);
    }
}
var hello=greeting('Good Morning')
var result=hello('Twinkle cats')


