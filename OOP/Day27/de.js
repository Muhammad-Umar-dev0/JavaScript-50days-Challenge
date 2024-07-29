
let arr=[1,2,3,4,5,6];

// let [a,b,...rest]=arr;

// console.log(a,b,rest);

//skipping elements

let arr2=[1,2,3,4,5,6];
let [c, d, ,...rest]=arr2;

console.log(c,d, rest)

 //objects
const user = {
    name: "umar",
    uni: "air"
};
const { name, uni } = user;
console.log(name); 
console.log(uni);

//renaming variables
const {name : username}=user;
console.log(username);

//default values

// const { name, uni = "unknown" } = user;
// console.log(name); 
// console.log(uni); 

//nested object destructuring

// const user = {
//     name: "umar",
//     address: {
//         city: "Islamabad",
//         country: "Pakistan"
//     }
// };


// const { name, address: { city, country } } = user;
// console.log(name); 
// console.log(city); 
// console.log(country);
