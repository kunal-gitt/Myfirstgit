// with promises

console.log('Person1 : show ticket');
console.log("Person2  : show ticket");


const promisewifebringingtickets = new Promise((resolve , reject) =>{

     setTimeout(() => {
        resolve("ticket");
     }, 3000);


} );


const getpopcorn = promisewifebringingtickets.then((t) => {
        
       console.log("wife: i have tics");
       console.log("husband: we should go in");
       console.log("wife: no i am hungary");

       return new Promise((resolve , reject) => resolve(`${t} popcorn`) )
});


const getbutter = getpopcorn.then((t) => {
        
    console.log("hushband: i got some popcorn");
    console.log("husband: we should go in");
    console.log("wife: i need butter on my popcorn ");

    return new Promise((resolve , reject) => resolve(`${t} butter`) )
});

const getcolddrinks = getbutter.then((t) =>{


return new Promise((resolve , reject) => resolve(`${t} colddrinks`) )

})



getcolddrinks.then((t) => {console.log(t)} );


console.log('Person4 : show ticket');
console.log("Person5  : show ticket");


//with async


console.log('Person1 : show ticket');
console.log("Person2  : show ticket");


const premovie =  async () =>{

    const promisewifebringingtickets = new Promise((resolve , reject) =>{

        setTimeout(() => {
           resolve("ticket");
        }, 3000);
   
   
   } );


   const getpopcorn = new Promise((resolve , reject) => resolve(' popcorn') )

   const getcandy = new Promise((resolve , reject) => resolve('candy') )

   const getcoke = new Promise((resolve , reject) => resolve('colddrinks') )

   let ticket = await promisewifebringingtickets;
   


    let [popcorn,candys,colddrink] = await Promise.all([getpopcorn , getcandy , getcoke]);

    console.log(`${popcorn} , ${candys} , ${colddrink}`);



   return ticket; 

}


premovie().then((m) => console.log(`Person3 : shows ${m}`));


console.log('Person4 : show ticket');
console.log("Person5  : show ticket");