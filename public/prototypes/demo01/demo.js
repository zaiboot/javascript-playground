(function () {
    'use strict';
    Object.defineProperty(Array.prototype, 'last', {
        get: function(){ return this[this.length -1]; }

    });

    var arr = ['red', 'blue', 'green'];   
    
    
    var last = arr.last;
    display(arr);
    display(last);
    var arr1 = [1,2,3];
    display(arr1.last);
    
}());