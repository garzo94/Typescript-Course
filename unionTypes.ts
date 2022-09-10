let age: number|string = 21

type Point4 = {
    x:number,
    y:number
}

type Loc = {
    lat: number;
    long:number;
}

let coordinates:Point4|Loc = {x:1,y:34}

// Type Narrowing
function printAge(age:number|string):void{
    console.log(`you are ${age}`)
}

function calculateTax(price:number|string, tax:number){
   if(typeof price === 'string'){
    price = parseFloat(price.replace("$",""))
   }
   return price * tax
}

// Union types and arrays
const stuff: any[] = [1,2,true,'heey',{}]
const stuff2: (number | string)[] = [1,2,3,'heey']

const coords: (Point4 | Loc)[]=[]

// literaly types
let zero: 0 = 0
type Day = | "Monday"| "Sunday"
let today: Day = "Monday"