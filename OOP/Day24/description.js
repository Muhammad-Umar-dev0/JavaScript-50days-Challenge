

const value=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(value);

const JS={
    source:"Chai",
    availability:true

}

const source=Object.getOwnPropertyDescriptor(JS,"source");
console.log(source);

Object.defineProperty(JS,'source',{
    enumerable:false
});

for(let [key,value] of  Object.entries(JS)){
    if(typeof value!=='function'){
        console.log(`${key} : ${value}`);

    }
}