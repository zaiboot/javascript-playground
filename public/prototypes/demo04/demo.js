(function () {
    'use strict';
    function Animal( voice) {
        this.voice = voice || 'grunt';
        display("Creating animal");
    }
    Animal.prototype.speak = function () {
        display(this.voice);
    }

    function Cat(name, color) {
        /*call the ctor from Animal */
        //this.prototype = new Animal('Miau')
        Animal.call(this, 'Meow')
        this.name = name;
        this.color = color;
    }

    Cat.prototype = Object.create(Animal.prototype);
    //using Object.create will not call the inner code
    //Cat.prototype = new Animal();
    //  will call code inside line #4
    var gato = new Cat('Baguira', '#000000');
    gato.speak();
    display( Object.keys( gato));


} ());