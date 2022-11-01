function outer(){

    console.log("outer function");

    return function inner(){

        console.log("inner function");
        
        return function innerinsideinner(){

            console.log("inner inside inner");
        }
    }
}



let a = 10 ;

var b = 20;
