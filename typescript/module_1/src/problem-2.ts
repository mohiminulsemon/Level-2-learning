{
    function findLargestNumber(numbers: number[]): number {

        let largest = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > largest) {
                largest = numbers[i];
            }
        }
        return largest;
    }
    
    // console.log(findLargestNumber([10, 5, 8, 20, 3])); 
    
}