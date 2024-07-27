
function init(){
    const x=9;
    //console.log(`Outer function: ${y}`);   generates error 

    function display(){
        let y=19;
        console.log(x);
    }
    display();
}

init();