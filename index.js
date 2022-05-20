// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
const copyOfCats = [...cats];

function  destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.push(name);
    return copyOfCats;
}

function prependCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.unshift(name);
    return copyOfCats;
}

function removeLastCat() {
    const copyOfCats = [...cats];
    copyOfCats.pop();
    return copyOfCats;
}

function removeFirstCat() {
    const copyOfCats = [...cats];
    copyOfCats.shift();
    return copyOfCats;
}