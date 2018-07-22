//Arrays new Methods
// 1. find()
//2.findIndex()
//3.some()
//4.every()

const beers = [
    {
        name: 'Purple Iris'
        , abv: 6.8,
        label: 'https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png',
        type: 'IPA'
    },
    {
        name: 'Orange Blossom Pilsner',
        abv: 5.5,
        label: 'https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png',
        type: 'Pilsner'
    },
    {
        name: 'Darkness',
        abv: 4.2,
        label: 'https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png',
        type: 'Stout'
    },
    {
        name: 'Belgian Wit',
        abv: 5.4,
        label: 'https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png',
        type: 'Wheat'
    },
    {
        name: 'Stolen Fruit',
        abv: 4.6,
        label: 'https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png',
        type: 'Wheat'
    },
    {
        name: 'Stolen Fruit',
        abv: 4.6,
        label: 'https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png',
        type: 'Wheat'
    }
];
//find()
const beer = beers.find(beer => beer.name === 'Purple Iris');

console.log(beer);

//findIndex()
const beerIndex = beers.findIndex((beer) => {
    if (beer.abv === 4.2) {
        return true;
    }
    return false;
});

console.log(beerIndex);

//some
const ages = [10, 23, 56, 33, 45];

console.log(ages.some(age => age > 18));

//every
console.log(ages.every(age => age > 19));

