{
    function reverseArray<T>(array: T[]): T[] {
        let resultarray: T[] = [];
        for(let i = array.length - 1; i >= 0; i--){
            resultarray.push(array[i]);
        }
        return resultarray;
    }
    
    
    // const result1 = reverseArray(["apple", "banana", "cherry"]);
    // console.log(result1); 
    
    
    // const result2 = reverseArray([10, 20, 30]);
    // console.log(result2); 
    
}