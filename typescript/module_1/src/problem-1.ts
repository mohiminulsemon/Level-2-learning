{
    function repeatString(input: string, repeatTimes: number): string {
        let outputString = "";
        for (let i = 0; i < repeatTimes; i++) {
            outputString += input;
        }
        return outputString;
    }
    
    
    // const result = repeatString("Hello!", 3);
    // console.log(result); 
    
}