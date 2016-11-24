function Book() {
    var name = '';
    var nameChangingListeners = [],
        nameChangedListeners = [];


    Object.defineProperty(this, 'name', {
        get: function () { return name; },
        set: function (val) {
            if (val !== undefined && val !== name) {
                for (var index = 0; index < nameChangingListeners.length; index++) {
                    var listener = nameChangingListeners[index];

                    if (!listener(name,val)) {
                        //no estoy muy seguro de esta implementacion.
                        return;
                    }
                }
                console.log("Changing name from = ", name, " to = ", val);
                name = val;

                for (var index = 0; index < nameChangedListeners.length; index++) {
                    var listener = nameChangedListeners[index];                    
                    listener(name);                    
                }

            }
        }
    });

    this.onPriceChanging = function (callback) {
        nameChangingListeners.push(callback);
    };

    this.onPriceChanged = function (callback) {
        nameChangedListeners.push(callback);
    }

}
var validateName = function (oldName, newName) {
    
    if (newName == "chobo") {
        console.log("Name ", newName , " is invalid");
        return false;
    }
    return true;
}
var b = new Book();
b.onPriceChanging(validateName);
b.name = "bbb";
console.log("- ", b.name);
b.name = "chobo";
console.log("- ", b.name);