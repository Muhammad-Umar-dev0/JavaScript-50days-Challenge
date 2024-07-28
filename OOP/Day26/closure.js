//clsoure returns functional scope as well as lexicle environment and provides access to variables of outer function even it is executed.


function outer(){
    const name="Umar";
    function inner(){
        console.log(name);
    }

    return inner;
}

const func= outer();
func();


//example 2

function createCounter(){
    let count=0;

    return function (){
        count=count+1;
        return count;

    }


}

const counter1 = createCounter(); 
console.log(counter1()); 
console.log(counter1()); 

