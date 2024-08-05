
let passwordbox=document.getElementById('password');
let length=12;

const uppercase="ABCDEFGHIKLMNOPQRSTUVXYZ";
const lowercase="abcdefghijklmnopqrstuvxyz";
const numbers="0123456789";
const symbols="@#$%^&*()_+~\}{[]></-="

const allchars=uppercase+lowercase+numbers+symbols;


const createPassword=()=>{
    let password='';
    password=password+uppercase[Math.floor(Math.random() * uppercase.length)];
    password=password+lowercase[Math.floor(Math.random() * lowercase.length)];
    password=password+numbers[Math.floor(Math.random() * numbers.length)];
    password=password+symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length){
        password+=allchars[Math.floor(Math.random() * allchars.length)]

    }

    passwordbox.value=password;
}

function copy(){
    passwordbox.select();
    document.execCommand("copy");
}