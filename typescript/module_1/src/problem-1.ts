{
    function repeatString(input: string, repeatTimes: number): string {
        let outputString = "";
        for (let i = 0; i < repeatTimes; i++) {
            outputString += input;
        }
        return outputString;
    }
    
    
    //  console.log(repeatString("Hello!", 3));  
    
}