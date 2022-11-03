

const posts = [{

    title:"Post one",
    body :"This is post one",
    createdAt : Date.now()

},{

    title:"Post two",
    body:"This is post two",
    createdAt : Date.now(),
    
}];


let intervalid = 0;

function getpost(){
    clearInterval(intervalid);
   intervalid = setInterval(()=>{

        let output = '';

        posts.forEach((post, index)=>{
    
            output += `<li>${post.title} - last updated ${(Date.now() - post.createdAt) / 1000} seconds </li>`;

        });

        document.body.innerHTML = output;

      
   },1000)

}


function createpost(post , callback){

    setTimeout(() => {

        
        posts.push({...post , createdAt: Date.now()});
        callback();
        
    }, 2000 );

}

function create4post(post , callback){

     setTimeout(() => {

        posts.push({...post , createdAt: Date.now()});
        
        callback();
        
     }, 3000);


}



create4post({ title: "Post four" , body: "this is post four" } , createpost( {title: "Post three" , body: "this is post three"} , getpost));