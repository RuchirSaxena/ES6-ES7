//Destructing can be done with objects and array and function returning object

//Destructing helps us to get the data out of an object and assign then to variables

//Eg.1
const person = {
    name: "Ruchir",
    city: "Noida",
    profession: "coder"
};

const { name, city } = person;

console.log(name);
console.log(city);

//Eg2:

const data = {
    first: "rem",
    last: 'bos',
    links: {
        social: {
            twitter: '@ruhir',
            facebook: 'ruchirsaxena'
        }
    }
}


let { facebook, twitter: tweet } = data.links.social

console.log(tweet, facebook);

//setting default in Destructing

var settings = { width: 300, color: 'black' };

const { width = 100, heigth = 200, color = 'red', boder = 'none' } = settings;

console.log(width, heigth, color, boder);

//object Destructing with variable renaming & default values

const { w: width1 = 400, h: heigth1 = 500 } = { w: 800 };

console.log(width1, heigth1);

//Destructing with arrays

const details = ['ruchir', 123, 'developer'];

const [myname, id, profession] = details;

console.log(myname, id, profession);

let somedata = 'BasketBall,Sports,903456,23';

let [itemname, category, sku, inventory] = somedata.split(',');

console.log(itemname, category, sku, inventory);

let team = ['Kholi', 'Dhoni', 'Dawan', 'Ashwin', 'Pandiay'];

const [captin, wisecaptin, ...players] = team;

console.log(captin, wisecaptin, players);

//Destructing with functions and returning object

function convertCurrency(amount) {
    const convert = {
        USD: amount * 69.7,
        AUS: amount * 45,
        MEX: amount * 13.30
    }
    return convert;
}

let { USD, AUS, MEX } = convertCurrency(100);

console.log(USD, AUS, MEX);

function tipCal({ total = 100, tip = 0.15, tax = 0.13 } = {}) {
    return total + (tip * total) + (tax * total);
}

var obj = {
    total: 200,
    tip: 0.20
}
const bill1 = tipCal(obj);
const bill2 = tipCal();

console.log(bill1);
console.log(bill2);