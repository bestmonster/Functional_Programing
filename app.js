//Purefuntion
function addPure(a, b) {
    return a+ b;
}
console.log('Purefuntion : ', addPure(1, 6) );

//Avioid Side Effect
const b = 16;

function addSideeffect (a) {
    return a + b;
}
console.log('Side Effect', addSideeffect(1));

//First Class Funtion - Assigning a funtion to varible
const addAssigning = function(a, b) {
    return a + b;
}
console.log('Assigning', addAssigning(1, 6));

//First Class Funtion - Returning a funtion 
function addReturning(a, b) {
    return function() {
        return a+ b;
    }
}
const addTwoNumber = addReturning(1, 6);
console.log('Returning', addTwoNumber() );

//First Class Funtion - Accept a function an argument

//EP. 2
//4. Higher order function

const persons = [
    { name: 'Jone', age: 17 },
    { name: 'Bill', age: 10 },
    { name: 'Steve', age: 15 },
];

//filter

const kids = []
for (let i = 0; i < persons.length; i++) {
    const person = persons[i];

    if (person.age <= 15) {
         kids.push(person);
    }
}
console.log('Kids : ', kids);

// const kids = persons.filter((person) => {
//     return person.age <= 15;
// })

// const kids = persons.filter(person => person.age <= 15)

// console.log('Kids : ', kids);
