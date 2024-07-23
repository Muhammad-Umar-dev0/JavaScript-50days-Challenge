
const user = {
    name: "Umar",
    email: "user@gmail.com",
    id: 1,

    details: function() {
        console.log(this.name);
        console.log(this);
    }
}

console.log(user.name); 
console.log(user.details()); 
console.log(this); 

//constructor function 
function Person(name, id, uni) {
    this.name = name;
    this.id = id;
    this.uni = uni;
}

const person1 = new Person("Umar", "1", "Air");
const person2 = new Person("Ali", "2", "NUST");

console.log(person1); 
console.log(person2);

//instance is used to check if object is instance of a constructor or not

console.log(person1 instanceof Person);


