
class user{
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
    }

    conversion(){
        return `${this.name.toUpperCase()}`;
    }
}

const person=new user("umar","user@gmail.com",123);
console.log(person);

console.log(person.conversion());


//behind the scenes

function User(name,email,password){
    this.name=name;
    this.email=email;
    this.password=password;

}

User.prototype.Upper=function(){
    return `${this.name.toUpperCase()}`;

}

const person2=new User("hamza","user@gmail.com",321);
console.log(person2);

console.log(person2.Upper());
