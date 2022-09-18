// Truthiness guaRDS

const el = document.getElementById("idk")
if(el){
    el
}

//Equality narrowing
function someDemo(x:string|number,y:string|boolean){
    if(x === y){
        console.log('both are string')
    }
}

// in operator
interface Movie{
    title:string,
    duration:number,
}

interface TVShow {
    title:string,
    episodeDuration:number,
}
function getRuntime(media: Movie | TVShow){
    if("episodeDuration" in media){
        media.episodeDuration
    }
}

// Intance Of
function printFullDate(date:string|Date){
    if(date instanceof Date){
            console.log(date.toUTCString())
    }else{
        console.log(new Date(date).toUTCString())
    }
}

// Type predicates
interface Cat {
    name: string,
    numLives:'number'
}

interface Dog {
    name:string,
    breed:string
}

function isCat(animal:Cat|Dog):animal is Cat{
   return (animal as Cat).numLives !== undefined
}
// function makeNoise(animal:Cat|Dog):string{
//   if(isCat(animal)){
//     animal
//     return 'Mou'
//   }
// }

// Discriminated Unions

interface Rooster{
    name:string,
    weight:number,
    age:number,
    kind:'rooster'
}

interface Cow{
    name:string,
    weight:number,
    age:number
    kind:'cow'
}

interface Pig{
    name:string,
    weight:number,
    age:number
    kind:'pig'
}

type FarmAnimal = Pig | Rooster | Cow
function getFarmAnimalSound(animal:FarmAnimal){
switch(animal.kind){
    case('pig'):
        return 'Oik'
    default:
        // const shouldNever:never = animal // error

}}

//Checks with Never
