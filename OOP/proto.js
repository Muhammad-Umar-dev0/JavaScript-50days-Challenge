
//new keyword creates new object.
//That object gets linked to the prototype of constructor function.
//constructor function is called and "this" is bounded to that object.
//new object is returned.

const person={
    city:"Islamabad"
    
}

let city=["Attock","Islamabad","Lahore"];

Object.prototype.print=function(){
    console.log("Karachi The city of Lights");
}

console.log(person.print());
console.log(city.print());

Array.prototype.display=function(){
    console.log("Lor lor ae");
}

//console.log(person.display());    generates error


const coding={
    course:"DSA"
}


const teacher={
    name:"Zohaib"

}


// teacher.__proto__=coding;
// console.log(teacher.course);

//modern technique
Object.setPrototypeOf(coding,teacher);
console.log(coding.name)

