


const hobbies=['sports','coding'];

const add_hobbies=['reading'];

const new_array=[...hobbies,...add_hobbies];
console.log(new_array);

const user1={
    name:"Umar",
}

const extended_user={
    Course:'web',
    ...user1
}

console.log(extended_user.name);

