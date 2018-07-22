//Spread Operator & Rest Operator

const featured = ['Deep Dish', 'Peperoni', 'Hawaiian'];

const speciality = ['Meatzza', 'Spicy Mama', 'Margherita'];

let pizzas = featured.concat(speciality);

console.log(pizzas);

//Now in above pizzas array we want to add and extra topping in the middle

let specialPizza = [];

specialPizza = specialPizza.concat(featured);

specialPizza.push('veg');

specialPizza = specialPizza.concat(speciality);

console.log(specialPizza);

//Better approch using spred Operator

specialPizza = [...featured, 'veg', ...speciality];

console.log(specialPizza);

//doing  deep copy using ...spread Operator

const fridayPizza = [...pizzas];

fridayPizza[0] = 'Canada Pie';

console.log(pizzas);
console.log(fridayPizza);


//Spread with functions

function sayHi(firstname, lastname) {
    console.log(`Hey their ${firstname}  ${lastname}`);
}

const fullname = ['ruchir', 'saxena'];

sayHi(...fullname);


//Excersice using spread

let letters = document.querySelector('.jump').innerText;

var individualLetters = [...letters];

console.log(individualLetters);

var lettersSpans = individualLetters.map((letter) => {
    return `<span>${letter}</span>`;
}).join('');

console.log(lettersSpans);


document.querySelector('h2').innerHTML = lettersSpans;

//Another Example of using Spread
console.clear();
let inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
];

let inventerIndex = inventors.findIndex((inventor) => inventor.first === 'Johannes');
console.log(inventors);
inventors.splice(inventerIndex, 1);

console.log(inventors);

/**                       Rest                  */

function currencyConverter(rate, ...amounts) {
    return amounts.map(amount => amount * rate);

}

console.log(currencyConverter(1.54, 10, 23, 45, 70));

const runner = ['ruchir saxena', 123, 3.4, 3.4, 4.5, 5.6, 4.5];

let [name, id, ...runs] = runner;

console.log(name, id, runs);












