/*Promises =>Promises are introduced in ES6 
Before promises we need to use Any third party libarbies like Jquery etc.

Also fetch API was introduced as build in browser feature to make AJAX requests , similar to Jquery AJAX
*/

const posts = fetch('https://jsonplaceholder.typicode.com/posts');

posts.then(data => {
    return data.json()
}).
    then(response => {
        console.log(response)
    }).
    catch((err) => {
        console.error(err);
    });

//We can create our own promises for some own business logic , which does not necessearly include fetching data from server

const myPromise = new Promise((resolve, reject) => {
    resolve('Javascript is cool');
    reject(Error('error occured'));
});

myPromise
    .then((data) => console.log(data))
    .catch(err => { console.log(err) });

//Example use-case
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
];

let inventorDetailsData = [
    { first: 'Albert', city: 'london' },
    { first: 'Isaac', city: 'Zurich' },
    { first: 'Galileo', city: 'Italy' },
    { first: 'Marie', city: 'U.S' },
    { first: 'Johannes', city: 'Dublin' },
    { first: 'Nicolaus', city: 'France' }

];

function getInventor(name) {
    return new Promise((resolve, reject) => {
        let inventor = inventors.find((inventor) => {
            return inventor.first === name;
        });
        if (inventor) {
            resolve(inventor);
        } else {
            reject(Error("No Record Found"));
        }
    });

}

// getInventor('Johannes1')
//     .then(data => { console.log(data); })
//     .catch(err => console.log(err));


//Promise Chainning
function getInventorDetails(name) {
    return new Promise((resolve, reject) => {
        let inventor = inventors.find(inventor => inventor.first === name);
        if (inventor) {
            resolve(inventor);
        } else {
            reject(Error("Cannot Find Author"));
        }
    });

}

function getInventorCity(inventor) {
    console.log('inventorDetailsData:', inventorDetailsData);
    return new Promise((resolve, reject) => {
        let inventorDetails = inventorDetailsData.find(inventorDta => inventorDta.first === inventor.first);
        if (inventorDetails) {
            resolve(inventorDetails.city);
        } else {
            reject(Error("Cannot find City"));
        }
    });
}


getInventorDetails('Johannes')
    .then((data) => {
        console.log("Name:", data);
        return getInventorCity(data);
    }).then((data) => {
        console.log("City:", data);
    }).catch((err) => {
        console.log(err)
    });


//Calling multiple promises simultaneously 

const weather = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({ temp: 29, conditions: "ranniy" });
    }, 2000);
});

const tweets = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["I like the samosa", "I like tea in ranniy wheather"]);
    }, 0);
});



Promise
    .all([weather, tweets])
    .then(responses => {
        console.clear();
        console.log(responses);
    }).catch(err => console.log(err));













