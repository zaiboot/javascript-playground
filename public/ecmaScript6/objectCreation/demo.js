'use strict';
class Cat {
    constructor(name, color){
        this.name = name;
        this.color = color;       
    }
    speak(){
        display('hombre blanco');
    }

}
var cat = new Cat('#', 'negro');

cat.speak();