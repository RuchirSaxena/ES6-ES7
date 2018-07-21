//New string methods introduced in javascript
const course = 'RFB2';

const flightNumber = '20-AC2018-jz';
const accountNumer = '82524344376RT0001';

const make = 'BMW';
const model = 'x5';
const colour = 'Royal Blue';

console.log(flightNumber.startsWith('20'));

console.log(accountNumer.endsWith(001));

console.log(flightNumber.startsWith('AC', 3));

console.log(flightNumber.endsWith('jz'));

console.log(accountNumer.endsWith('RT', 13));

console.log(make.repeat(100));

function leftPad(str, length = 10) {
    return `${' '.repeat(length - str.length)}${str}`;
}

console.log(leftPad(make));