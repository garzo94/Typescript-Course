interface Point {
    x:number,
    y:number
}

const pt:Point = {x:12,y:5} // --> intercafe is only for objects

//ReadOnly and interface Propeties
//Interface Methods
interface Person {
    readonly id:number;
    first:string;
    last:string;
    nickname?:string;
    sayHi(): string
}

const thomas:Person = {first:"Thomas", last:"mylast", id:12, sayHi:()=>'Hello'}

//Method parameters

interface Product {
    name:string,
    price:number,
    applyDiscount(discount:number):number
}

const shoes: Product = {
    name :'my shoes',
    price: 25,
    applyDiscount(amount:number){
        return this.price * amount
    }
}

//extending interfaces
interface Dog {
    name:string
}

interface ServiceDog extends Dog{
    job:'durg sniffer' | "bomb"
}

const chewy: ServiceDog ={
    name:'Rollo',
    job:'bomb'
}

// Multiple inheritance
interface Employee {
    readonly id:number,
    email:string,
}

interface Engineer extends Person, Employee{
    level:string,
    languages:string[]
}

// types vs interfaces
// with Types You cant overwrite a type and to extend you have to use "&"

