//scopes and closures
function outer(){
    const outerVar = "Hey I am the outer var";

    function inner(){
        const innerVar = "Hey I am an inner var";
        console.log(innerVar);
        console.log(outerVar);
    }

    return inner();
}

const innerFn = outer();