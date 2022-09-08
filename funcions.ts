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