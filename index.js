/*        // This is my First JavaScript code!
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


function greet() {
console.log('Hello + name');
}

greet('Hamid','Bamgbopa');
function best(yourName){
    console.log(yourName + 'is thev best [programmer.');
}
best('Hamid');

// performing a task
function greet(name, lastname){
    console.log('Hello' + name + '' + lastName)
}

function area(base, height){
    return base * height/2;
}
console.log(area 12/17);

for (let i = 0; i < 5; i++) {
console.log('I am the best programmer')
}

for (let i = 0; i < 100; i++) {
console.log('Hello World', i);
}

for (let i = 0; i < 100, i++) {
    console.log(i)
}
function power(base, exponent) {
    result=1;
   for (let i = 0; i < exponent; i++) ;
   result= result*base;
}
console.log( power(2,4))

function addlot(begin,finish)
let total =0;
for (let i = begin; i<= finish; i++){
    total = i + i
}
return total;
console.log(addup(2,9))

let counter=1;
while (counter<101){
    console.log(counter)
    counter++
}

for (let i=1; i<101 ; i++){
    console.log(1)
}   

let password="magnolia123"
let userInput="sdsf"
userInput=parseInt(prompt("Enter a number"))
/*
while (userInput =! password){
    prompt("please enter the right password")
    console.log(userInput)
    alert (userInput + 3)
alert ("Access Granted!!")
}
*/


let age=prompt("Your age");

if (age >=0 && age <=1) {
    alert("You are a baby");
}
else if (age >=2 && age <=3 ) {
    alert("You are a toddler");
}
else if (age >=4 && age <=12 ){
    alert("You are a kid");
}
else if (age >=13 && age <=20 ){
    alert("You are a teenager");
}
else if(age >=21 && age <=50 ){
    alert("You are old")
}