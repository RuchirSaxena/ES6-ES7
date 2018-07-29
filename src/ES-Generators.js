//Generators =>A fuction we can start and stop as per requirements , we can call it multiple times

function* listPersons() {
    yield 'ruchir';
    yield 'saxena';
    yield 'Developer';
}

const people = listPersons();

console.log(people.next());
console.log(people.next());
console.log(people.next());

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
];

function* loop(arr) {
    for (let item of arr) {
        yield item;
    }
}

const inventorsGenerator = loop(inventors);

console.log(inventorsGenerator.next().value);
