
//Arrow Functions 

//Basic Syntax

const sayHello = (name) => {
    alert(`Hello ${name}`);
}

//Different way of defining arrow function , below syntax can be used with single argument and single line of code inside a function
const sayHello1 = name => alert(`Hello ${name}`);


sayHello1("Ruchir");

//Arrow function  =>this keyword usage

const user = {
    name: 'Ruchir',
    cities: ['Noida', 'Delhi', 'Gurugram'],
    //Below is the using functions in es5
    //printPlacesLived: function () {
    //ES6 way of defining fuction inside object
    printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);
        //without using arrow function =>this.name inside foreach will not work
        //var that =this;
        // this.cities.forEach(function(item){
        //     console.log(this.name + 'has lived in '+item);
        //   //  console.log(that.name + 'has lived in ' + item);
        // });
        //Using arrow function
        this.cities.forEach((item) => {
            console.log(this.name + ' has lived in ' + item);
        });

    }
};

user.printPlacesLived();



