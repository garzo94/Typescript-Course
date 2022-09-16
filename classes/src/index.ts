class Player {
    public readonly first:string // anybody can acces, or is chanchable
    public last:string
    private score:number =0  // only inside the class is like # in js, protect the variable
    protected score2:number = 1 // I can acces in other child classes

    constructor(first:string, last:string, private scoreParameter:number){
        this.first = first
        this.last = last
    }
    // It is  just geterable (read only)
    get fullName(): string{
        return  `${this.first} ${this.last}`
    }

    set scoreFunction(newScore:number){

    }
}

const elton = new Player("Elton", "Steele",5)
// elton.first = 'alex' <--- error

class SuperPlayer extends Player{
    public isAdmin: boolean = true
    maxScore(){
        this.score2 = 5
    }
}

// interfaces adn classes

interface Colorful {
    color:string
}

class Bike implements Colorful{
    constructor(public color:string){

    }
}

//Creating abstact class

abstract class Employee {
     constructor(public first:string, public last:string){
        this.first = first
        this.last=last
     }
     abstract getPay(): number
}

// I cant initiate without the abstract
class PartTimeEmployee extends Employee {

    constructor(first:string, last:string, private part:string){
        super(first,last)
        this.part = 'heey'

    }

    getPay(): number {
        return 5
    }
}


