
class user{
    constructor(username){
        this.username=username;
    }

    print(){
        console.log(this.username);
    }
}

class student extends user{
    constructor(name,email){
        super(name);
        this.email=email;
    }

    display(){
        console.log(`${this.username} ,  ${this.email} `);
    }
}

const st1=new student("umar","user@gmail.com",123);
console.log(st1);

console.log(st1.print());

const st2=new user("umar","user@gmail.com",123);
console.log(st2);

//console.log(st2.display());  generates error
