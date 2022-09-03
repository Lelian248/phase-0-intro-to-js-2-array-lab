// Write your solution here!
const cats =["Milo", "Otis", "Garfield"];
console.log(cats);

const destructivelyAppendCat = (name) => cats.push(name);
console.log(destructivelyAppendCat('Ralph'));

const destructivelyPrependCat = (name)=>cats.unshift(name);
console.log(destructivelyPrependCat('Bob'));

const destructivelyRemoveLastCat = () => cats.pop();
console.log(destructivelyRemoveLastCat());

const destructivelyRemoveFirstCat = () => cats.shift();
console.log(destructivelyRemoveFirstCat());

function  appendCat (name)  {
    const cats2 = cats.slice();
    cats2.push(name);
    return cats2;
}
console.log(prependCat("Arnold"));

function  prependCat(name)  {
    const cats2 = [...cats];
    cats2.unshift(name);
    return cats2;
}
console.log(prependCat("Arnold"));

function removeLastCat(){
    const cats2 = cats.slice(0,-1);
    return cats2;
}
console.log(removeLastCat());

function removeFirstCat(){
    const cats2 = cats.slice();
    cats2.shift();
    return cats2;
}
console.log(removeFirstCat());


