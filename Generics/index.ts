const nums: Array<number>=[]

const inputEl = document.querySelector<HTMLInputElement>("#username")!
console.log(inputEl)
inputEl.value = 'Hellow'

const btn = document.querySelector<HTMLButtonElement>(".btn") // i Give a type and return somethinf ot that time

//writing our generics
function numberIdentity(item:number):number{ // receive a type and return a certain type
    return item
}

function identityAny(item:any):any{
    return item
}
// example
function identity<Type>(item:Type):Type{ //whatever the tyte is, return that type
    return item
}

identity<number>(7)
//

function getRandomElement<T>(el:T[]):T{
 const rand = Math.floor(5)
  return el[rand]
}

getRandomElement<string>(['a','b','c'])
//Type Constraints
// I need to make sure that I passing a object
//Multiple Types
function merge<T extends object,U extends object>(object:T,object1:U){ // I dont need specify the return type
    return{...object,...object1}
}
const combo =merge({name:'colt'}, {pets:['blue','elton']})
// const combo2 =merge({name:'colt'},5) // error
const combo2 =merge({name:'colt'},{num:5}) // error

interface Lengthy{
    len:number
}

// function doubleLength<T extends Lengthy>(thing:T):number{
//     return thing.length * 2
// }

function doubleLength(thing:Lengthy):number{
    return thing.len * 2
}


doubleLength({len:5})

//Default parameter
function empty<T = number>():T[]{
    return []
}

const strings = empty<string>()

// CLasses
interface Song {
    title:string,
    astist:string,
}

interface Video{
    title:string,
    creator:string,
    resolution:string
}

class Playlist<T>{
    public queue: T[] =[]
        add(el:T){
            this.queue.push(el)
        }

}

const songs = new Playlist<Song>()
songs.add({title:'sdf',
    astist:'ghj'})