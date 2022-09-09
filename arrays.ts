// Array types
const mylist:[]=[] // --> this allow only a empty array

const users:string[]=[]
users.push('Hellos')

const ages:number[]=[]
const active:boolean[]=[]

//More array Syntax
type Point3 = {
    x:number,
    y:number
}

const coords:Point3[]=[]
coords.push({x:5,y:6})

// Multidimentional Arrays
const board: string[][]=[['s','f','f']]