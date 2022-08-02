abstract class Person {
    name: string

    constructor(name:string){
        this.name = name
    }

    display():void{
        console.log(`O nome é: ${this.name}`)
    }

    abstract find(nome: string): Person

}

/*let person1: Person
person1 = new Person ("Maria")*/

class Employee extends Person{
    find(nome: string): Person {
        return new Employee (nome)
    }
}

let emp1: Employee
emp1 = new Employee("Maia")
emp1.display()

let emp2: Employee
emp2 = emp1.find("Antonia")
emp2.display()