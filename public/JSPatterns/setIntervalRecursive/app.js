(function () {
    var count = 0;
    function functionWithDelay() {
        var max = 20, min = 5;
        var milisecs = Math.floor(Math.random()*(max-min+1)+min);
        
        
        console.log("Execution #", count, "");    
    }
    function callFunctionWithDelay(params) {
        console.log("Calling functionWithDelay #", ++count);
        functionWithDelay()
    }
    setTimeout(callFunctionWithDelay, 1000);
    
    
})();