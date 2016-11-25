var Calc = function (start) {
    var self = this;

    this.add = function (x) {
        console.log('Parent add');
        start = start + x;
        return self;
    }

    this.multiply = function (x) {
        console.log('Parent multiply');
        start = start * x;
        return self;
    }

    this.equals = function (callback) {
        console.log('Parent equals');
        callback(start);
        return self;
    }


}

module.exports = {
    add: function (x,y) {
        console.log('Wrapperd add');
        return new Calc(x).add(y || 0);
    },
    multiply: function (x,y) {
        console.log('Wrapperd multiply');
        return new Calc(x).multiply(y || 1);   
    }

};