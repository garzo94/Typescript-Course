const dog = {
    name:"Elton",
    breed:"Australia"
}
function printName(person:{first:string,last:string}):void{
 console.log(person.first, person.last)
}
printName({first:'Alex', last:'Garzo'})

//More OBjects types
// let cordinate:{x:number;y:number } = {x:34,y:2}
// function randomCoordinate():{x:number;y:number }{
//     return {x:5,y:3}
// }

// Type Aliast
type Point = {
    x:number,
    y:number
}

function doublePoint(point:Point):Point{
    return {x:5,y:2}
}

// Nested Objects
type Song= {
    title:string;
    artist:string;
    stream:number
    credits:{producer:string;
    writer:string}
}
function calculatePaylout(mysong:Song):number{
    return mysong.stream - 5
}

const aSong: Song ={
    title:'title',
    artist:'myartist',
    stream:564,
    credits:{
        producer:'prod',
        writer:'write'
    }
}

// Optional propeties

type Point2 = {
    x: number;
    y?:number;
}

const myPoint: Point2 = {x:1}

// Readonly modifier
type User ={
    readonly id:number;
    username:string
}

const user:User ={
    id:4564,
    username:'heey'
}

// user.id= 4654 --> I cant do this

//Intersection Types

type Circle = {
    radius:number
}

type ColorFul = {
    color:string
}

type ColorCircul = Circle & ColorFul

const happyFace: ColorCircul = {
    radius:5,
    color:'hello'
}
