{
    function logString(param: unknown): void {
        if (typeof param === 'string') {
            console.log(param);
        } else {
            console.error("Error: Input is not a string.");
        }
    }
    
    
    // logString("Hello, TypeScript!");
    
    // logString(42);
    
    
}