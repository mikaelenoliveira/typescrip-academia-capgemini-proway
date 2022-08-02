"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log(`O nome é: ${this.name}`);
    }
}
/*let person1: Person
person1 = new Person ("Maria")*/
class Employee extends Person {
    find(nome) {
        return new Employee(nome);
    }
}
let emp1;
emp1 = new Employee("Maia");
emp1.display();
let emp2;
emp2 = emp1.find("Antonia");
emp2.display();
//# sourceMappingURL=classeabstrata.js.map