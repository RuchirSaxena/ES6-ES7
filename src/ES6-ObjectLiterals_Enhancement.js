//Enhancements to object literals

const shoes = 10;

const socks = 5;

const shirts = 4;

const pants = 8;

//ES5 way
// const inventory = {
//     shoes: shoes,
//     socks: socks,
//     shirts: shirts,
//     pants: pants
// }

//ES6 way =>variable name should match the objet property name
const inventory = {
    shoes,
    socks,
    shirts,
    pants
}

console.log(inventory);

const modal = {
    //ES5 way
    create: function () {
        console.log("create() called");
    },
    //ES6 way
    open() {
        console.log("open() called");
    }
}

modal.create();
modal.open();

//computed properties

const key = 'pocketColor';
const value = '#ffc600';

const tshirt = {
    [key]: value
};

const keys = ['size', 'color', 'weight'];
const values = ['medium', 'red', 100];

console.log(tshirt);

const shirt = {
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift(),
    [keys.shift()]: values.shift(),
};

console.log(shirt);


