
// const person={
//     name:"Umar",
//     greet: function(){
//         console.log(`My name is ${this.name}`);
//     }
// }

// console.log(person.greet());
// const greet = person.greet;
// greet(); 


//example 2

this.x=7;
const module={
    x:49,
    getX: function(){
        console.log(this.x);
    }
}

console.log(module.getX());

const retrieve_X=module.getX;
console.log(retrieve_X());

const boundX=retrieve_X.bind(module);
console.log(boundX());

