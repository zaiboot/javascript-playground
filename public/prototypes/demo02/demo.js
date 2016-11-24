(function () {
    'use strict';
    function Cat(name, color) {
        this.name = name;
        this.color = color;
    }
    Cat.prototype.age = 3;

    var fluffy = new Cat('Chester', 'Atigrado');


    display(Cat.prototype);
    display(fluffy.__proto__);
    display("using == " + (fluffy.__proto__ == Cat.prototype)); //should return true
    display("using === " + (fluffy.__proto__ === Cat.prototype)); //should return true

    display("pedazo de picha");
    var lolita = new Cat('Lolita', 'Atigrada');
    display(lolita.__proto__);
} ());