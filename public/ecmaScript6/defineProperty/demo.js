'use strict';

function ctrFunction(name, color) {
    var name = name;
    var r = {};
    Object.defineProperty(r, 'fullName', {
        get: function () {
            console.log(this);
            return name;// this is the actual name variable, created in line 4.

        },
        set: function (value) {
            name = value;
        }
    });
    Object.defineProperty(r, 'fullName', { configurable: false});
    return r;

};

var f = new ctrFunction('a', 'b');
f.fullName = 'pull the trigger';
display(f.fullName);

var b = new ctrFunction('a', 'b');
b.fullName = 'Tony';
//Muy interesante, al ser un lenguaje dinamico, el puede crear name como una variable
//nueva pero nunca sobre escribe el var dentro del function.
b.name ="goku"; //b.name es diferente del var definido en var name ="asdsa";

display(b.fullName);