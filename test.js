var arr=[1,2,3,4]
function arrayTraverseSum(arr,lastindex){
    if(lastindex<0){
        return 0
    }
    return arr[lastindex]+arrayTraverseSum(arr,lastindex-1)
}
console.log(arrayTraverseSum(arr,arr.length-1))