/*
console.log('hello world');
console.error('error xd');
console.warn('warning');
*/

//var(not used), let , const(cant be changed later)
/*
let age = 30;
age = 44;

console.log(age);
*/

//datatypes: primitive datatypes= directly assigned 
// to memory, not a resource. 
// we have String Numbers Boolean null undefined Symbol
/*

const name = 'josh';
const age = 30; 
const rating = 4.5; // no doubles, just number
const cold = true;
const x = null;
const y = undefined;
let z; // also undefined


console.log(typeof age); //typeof test the type
//typeof x which is null will result in object, but it is null.


//concatenation, below is the old way kinda pain when long
console.log('my name is ' + name + ' and i am age ' + age);
//template string, new way
console.log(`my name is ${name} and i am age ${age}`);
*/

/*
const s = 'hello world';
console.log(s.length); //property
console.log(s.toUpperCase()); //function
console.log(s.substring(0, 5));
//chain
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));//gives array w a letter at each index
*/

//arrays - variables that hold multiple values
//can mix datatypes

/*
const numbers = new Array(1,2,3,4,5,6);// old w constructor
const fruits = ['appkes', 3, 'pear'];
//can use const for array, can still add new elemetns.
fruits[3] = 'banana';// add
fruits.push('coconut'); // add better way
fruits.unshift('berry'); // adds to the begining
fruits.pop(); // takes away last one
console.log(Array.isArray(fruits));// check if something is array
console.log(fruits);
console.log(fruits.indexOf(3));
*/

//object literals - key value pairs
/*
const person = {
    firstName: 'josh',
    lastName: 'tna',
    age: 22,
    hobbies: ['parkour', 'training', 'coding'],
    address: {
        street: 'manstig 5',
        city: 'bålsta',
        country: 'sweden'
    }
}
console.log(person);
console.log(person.firstName, person.address);
console.log(person.hobbies[1]);
person.email = 'asdf@hotmail.com'; // adding property

//destructoring - pulling stuff out of a object
const { firstName, lastName, address: {city} } = person;
console.log(firstName);
console.log(city);
*/

//array of objects
/*

const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'workout',
        isCompleted: true
    },
    {
        id: 3,
        text: 'study',
        isCompleted: false
    }
];
console.log(todos);
console.log(todos[1].text);
// when u want to send in json ex to a server
const todoJSON = JSON.stringify(todos);
console.log(todoJSON); 

//for loop
for(let i = 0; i<10; i++) {
    console.log(`for loop number: ${i}`);
}

//while
let i= 0;
while(i<10){
    console.log(`while loop number: ${i}`);
    i++;
}

//iterate through object array
for(let i = 0; i<todos.length; i++) {
    console.log(todos[i].text);
}

// better way!!!!
for(let anything of todos) {
    console.log(anything.text);
}

//highorder array methods, forEach, map , filter, enables functional programming

//forEach
todos.forEach(function(todoz)  {
    console.log(todoz.text);
});

//map, returns arrray
const todoText = todos.map(function(todoz)  {
    return todoz.text;
});
console.log(todoText);

//filter, can add a condition to it. can chain funct ex map
const todoComp = todos.filter(function(todoz)  {
    return todoz.isCompleted === true;
}).map(function(todoz) {
    return todoz.text;
});
console.log(todoComp);

*/

//conditional statements

//if, note double == dosent care about datatype, ex number 10 and '10' same
//using triple === means it considers datatypes as well. triple good practice
/*
const x = 11;
if(x == 10) {
    console.log('x is 10');
} 
else {
    console.log('x not 10');
}

//turnery operator ? then : else, shorthand if statement
const color = x > 10 ? 'red' : 'blue';
console.log(color);

//switches, w cases for different options.
switch(color) {
    case 'red': 
        console.log('color red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color NOT blue or red');
        break;
}

*/

/*
//functions (can override parameters that have been specifed)
function opNums(num1, num2) {
    return num1 + num2;
}

//arrow functions, can take away curly braces when only one line and no need to write return
const addNums = (num1, num2) =>  num1 + num2;


console.log(addNums(2,5));
*/

//objects function start w big letter, 
//constructor
/*
function Person(fname, lName, dob) {
    this.fname = fname;
    this.lName = lName;
    this.dob = new Date(dob);
}
//prototype, move functions in the object so they dont clutter
Person.prototype.getFullName = function() {
    return `${this.fname} ${this.lName}`;
}
//class more nicer way than the above. 
class Person {
    constructor(fname, lName, dob) {
        this.fname = fname;
        this.lName = lName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear;
    }
}
//instansiate object 
const person1 = new Person('berry', 'el', '1-1-1993');
console.log(person1.dob);
console.log(person1.getFullName());
console.log(person1);

*/

//DOM, tree structure

//console.log(window); parent object of the browser
//single elment selectors

/*
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1')); // kinda like jquery for single elements

//multiple element selector
//console.log(document.querySelectorAll('.item'));// gives nodelist similar to array, tag, class, item can use arraymethods
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'hello';
ul.children[1].innerText = 'brad'; // does same as above 
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; // add html dynamically 

//change css
const btn = document.querySelector('.btn');
btn.style.background = 'red';

btn.addEventListener('mouseover', (e) => { // takes in e parameter
    e.preventDefault(); 
    console.log('clicklcick');
    console.log(e.target.className);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
   
});

*/

//form script
const myFrom = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myFrom.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault(); // want to have this when usingsubmits

    console.log(nameInput.value);

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error'); // have css class called error
        msg.innerHTML = 'pls enter all fields'
        setTimeout(() => msg.remove(), 2000); // msg goes away after 2 sec 
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        //clear fields
        nameInput.value  = '';
        emailInput.value = '';
    }
}

https://www.google.com/search?q=high+order+array+methods+javascript&rlz=1C1CHWL_svSE745SE745&oq=high+order+arra&aqs=chrome.2.69i57j0l5.3475j0j1&sourceid=chrome&ie=UTF-8
https://www.google.com/search?q=js+functional+programming&rlz=1C1CHWL_svSE745SE745&oq=js+functinal+progra&aqs=chrome.1.69i57j0l5.4457j0j1&sourceid=chrome&ie=UTF-8

//includes, can determine if a array contains something
