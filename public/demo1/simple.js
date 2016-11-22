//(function () {
//'use strict';
display("hello world");
var cat = { name: 'Manuel', color: 'Blanco' };
cat.age = 3; //dynamic property
cat.speak = function (params) { display("lindo bonito"); };
// display(cat);
// display(cat.name);
cat.speak();

//ctor function
function Cat() {
    // this.name = '#';
    console.log("+", this);
    this.color = '#ffffff';
    console.log("-", this);
}
console.log("calling new")
cat = new Cat();
display(cat);
try {
    display(this.color);
} catch (error) {
    display('this.color doesnt exist!!!');
}

//vs calling

cat = Cat.call(window);
cat = Cat.apply(window);
cat = new Cat();
display(window.color);
//})();
