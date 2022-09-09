function square(num: number){
    return num * num
}
function greet(person:string){
    return `Hi there, ${person}`
}
const doSomething = (person:string,age:number)=>{

}
square(3)

// Default values
function greet2(person:string = 'stranger'){
    return `Hi there, ${person}`
}

//Return Type Anootation
function square2(num:number):number{
    return num*num
}

// Anonymouse Functions
 const colors = ['red','blue','green']
 colors.map(color =>{
    color.toUpperCase()
 })

 // Void type --> dont return anything
 function printTwice(msg:string): void{
    console.log(msg)
    console.log(msg)
 }

 //Never type -- Never ruturn something

 function makeError(msg:string): never{
    throw new Error(msg)
 }

 function gameLoop():never{
    while(true){
        console.log("game loop runnng")
    }
 }
