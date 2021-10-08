/* function sayHello(person: string) {
    return "Hello," + person;
}

let user = 'Dave';
console.log(sayHello(user)); */
/* interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello," + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User"};

document.body.innerHTML = greeter(user); */
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return "Hello," + person.firstName + " " + person.lastName;
}
let user = new Student("Jane", "M.", "User");
console.log(greeter(user));
