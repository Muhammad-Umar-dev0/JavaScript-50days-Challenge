
function multiply(num){
    console.log(`${this.num}`);
    return num*5;

}

multiply.power=2;

console.log(multiply(5));
console.log(multiply.prototype);
console.log(multiply.power);

function display(name){
    this.name=name;
}

display.prototype.define=function (){
    console.log(`My name is ${name}`);
}

const func=new display("Umar");
func.define();

console.log(" *************************** ");
console.log("  ************************* ");
console.log("   *********************** ");

function user(name, id, dept) {
    this.name = name;
    this.id = id;
    this.dept = dept;
}

user.prototype.display = function() {
    console.log(`Name is: ${this.name}`);
    console.log(`ID is: ${this.id}`);
    console.log(`Department is: ${this.dept}`);
}

const user1 = new user("Umar", 1, "CS");
const user2 = new user("Hamza", 2, "CYS");

user1.display();
user2.display();





