{
    function logString(param: unknown) {
        if (typeof param === 'string') {
            return param;
        } else {
            return "Input is not a string.";
        }
    }
    
    
    // console.log(logString("Hello, TypeScript!"));
    // console.log(logString(42));
    
    
}