const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

//obj or array and make it smaller.

// const a = alphabet[0];
// const b = alphabet[1];
const [a, b] = alphabet;
//destructure the thing on the right, want to put in left
const [a, b, ...rest] = alphabet;

//combine 
const newArray = [...alphabet, ...numbers];
const newArr = alphabet.concat(numbers);

function sumAndMult(a, b) {
    return [a+b, a*b];
}
const ar = sumAndMult(2, 3);
const [sum, mult] = sumAndMult(2, 3);
console.log(ar);
console.log(sum);

//very useful with objects
const personOne = {
    name: 'josh',
    age: 22,
    adress: {
        city: 'earth',
        state: 'unknown'
    }
}

const personTwo = {
    name: 'hsoj',
    age: 10,
    adress: {
        city: 'mars',
        state: 'milkyway'
    },
    ability: 'speed'
}

const { name: firstname, age } = personTwo;
console.log(firstname);
console.log(age);

//combining obj
const personOneTwo = {...personOne, ...personTwo};
console.log(personOneTwo);

function printUser({name, age}) {
    console.log(`name is ${name} Age is ${age}`);
};
printUser(personOne);