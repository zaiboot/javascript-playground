'use strict';
var cat = {
    name: '#',
    color: '#ffffff'
};

display(Object.getOwnPropertyDescriptor(cat, 'name'));

display('making name read only');
Object.defineProperty(cat, 'name', { writable: false });

display(Object.getOwnPropertyDescriptor(cat, 'name'));
try {
    cat.name = "manuel"; //error catched     
} catch (error) {
    console.log(error);
    display('Error setting property name');
}

cat.lastName = {
    motherName:'madrigal',
    fatherName:'fallas'
} ;
display('lastName');
display(cat.lastName);
display('marking lastName as readonly');
Object.defineProperty(cat, 'lastName', { writable: false });

cat.lastName.fatherName ='Madrigal';
display(cat.lastName);

display('Freezing property lastName');
Object.freeze(cat.lastName);
cat.lastName.motherName ='Fallas';// error shown in the console.