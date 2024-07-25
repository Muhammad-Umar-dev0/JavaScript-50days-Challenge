function user(username){
    this.username=username;
    console.log(this);
    
}
//const user= new user("Umar");

function person(username,email){
    user.call(this,username);
    this.email=email;

}

const person1=new person("umar","user@gmail.com");
console.log((person1));

//example 2
function greet(){
    console.log(`HEllo! my name is ${this.name}`);
}

const obj={
    name:"Umar"
}

greet.call(obj)