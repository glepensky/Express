console.log('***** Music Collection *****')

// create empty collection array
let collection = [];

// create addToCollection function to take in album parameters and
// create a new object,
// add the new object to the end of the collection array,
// and return newly created object.

function addToCollection(titleIn, artistIn, yearPublishedIn) {
    let albumToAdd = {
        title: titleIn,
        artist: artistIn,
        yearPublished: yearPublishedIn,
    };

    collection.push(albumToAdd);
    return albumToAdd;
}

// create 6 albums for collection

addToCollection('Begin Again', 'Jessie Ware', 2023);
addToCollection('Seeking Thrills', 'Georgia', 2020);
addToCollection('Preachers Daughter', 'Ethel Cain', 2022);
addToCollection('Carrie & Lowell', 'Sufjan Stevens', 2015);
addToCollection('The Age of Adz', 'Sufjan Stevens', 2010);
addToCollection('Aromanticism', 'Moses Sumney', 2020);

// test the addToCollection function
console.log(collection);

// create function showCollection that will:
// take an an array parameter,
// log the show of items in the array, 
// and loop over the array and log each album as 'TITLE by ARTIST, published in YEAR'.

function showCollection(title, artist, yearPublished) {
    console.log('The number of albums in my collection:', collection.length);

    for (let index in collection) {

        console.log(collection[index].title + ' by ' + collection[index].artist + ',' + ' published in ' + collection[index].yearPublished + '.');
    }
}


showCollection(collection);

// look into for..of and for...in loops and the difference. 


// create function findByArtist that will:
// take in artist as a string parameter,
// create an array to hold results,
// loop through the collection array and add any objects matfhing artist to the array,
// and return the array with matching results. 

function findByArtist(criteria) {
    let sameArtistCollection = [];
    for (let index = 0; index < collection.length; index++) {
        console.log(collection.length);
        if (collection[index].artist === criteria) {
            sameArtistCollection.push(collection[index].artist);
        }
    }
    return sameArtistCollection
}

console.log(findByArtist('Sufjan Stevens'));

// stretch done during class with Alex
// search

let result = []

function search(toSearch) {
    for (let index = 0; index < collection.length; index++) {
        if (collection[i].artist === toSearch || collection[i].year === toSearch) {
            result.push(collection[i])
        } else if (collection[i].artist != toSearch && collection[i] != toSearch)
            result = []
    } else {
    return collection
    }
}





