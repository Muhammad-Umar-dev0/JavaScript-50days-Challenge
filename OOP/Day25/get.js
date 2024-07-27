
class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email=value;
    }
}


const user1=new User("user",123);
console.log(user1);

console.log(user1.email);

//using functions



function User(email, password) {
    this._email = email;
    this._password = password;

   
    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase();
        },
        set: function(value) {
            
            this._email = value;
        }
    });

   
    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password;
        },
        set: function(value) {
           
            this._password = value;
        }
    });
}

const user2 = new User("user@gmail.com", 123);
console.log(user2.email); 
console.log(user2.password);

user1.email = "newuser@gmail.com";
console.log(user2.email); 



