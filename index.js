        // This is my First JavaScript code!
        console.log('Hello World');
let name = 'Hamid';
console.log(name);

//Cannot be a reerved keyword
//Should be meaningful
//Cannot start with a number (1name)
//Cannot contain a space or hyphen (-)
//Are case-sensitive

let Name = 'Hamid'; //String Literal
let age = 15; //Number Literal
let isApproved = false; //Boolean Literal
let firstName = Undefined;
let selectedColor = null;
let person = {
    name: 'Hamid',
    age: 15
};

//Dot Notation
person.name = 'Hamid';

//Bracket Notation
let selection = 'name';
person[selection] ='Hamid';


console.log(person.name);
//test

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);

function great(name) {
    console.log('Hello' + name)
}

greet ('Hamid');