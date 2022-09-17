"use strict";
const nums = [];
const inputEl = document.querySelector("#username");
console.log(inputEl);
inputEl.value = 'Hellow';
const btn = document.querySelector(".btn"); // i Give a type and return somethinf ot that time
//writing our generics
function numberIdentity(item) {
    return item;
}
function identityAny(item) {
    return item;
}
// example
function identity(item) {
    return item;
}
identity(7);
//
function getRandomElement(el) {
    const rand = Math.floor(5);
    return el[rand];
}
getRandomElement(['a', 'b', 'c']);
//Type Constraints
// I need to make sure that I passing a object
//Multiple Types
function merge(object, object1) {
    return Object.assign(Object.assign({}, object), object1);
}
const combo = merge({ name: 'colt' }, { pets: ['blue', 'elton'] });
// const combo2 =merge({name:'colt'},5) // error
const combo2 = merge({ name: 'colt' }, { num: 5 }); // error
// function doubleLength<T extends Lengthy>(thing:T):number{
//     return thing.length * 2
// }
function doubleLength(thing) {
    return thing.len * 2;
}
doubleLength({ len: 5 });
//Default parameter
function empty() {
    return [];
}
const strings = empty();
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
songs.add({ title: 'sdf',
    astist: 'ghj' });
