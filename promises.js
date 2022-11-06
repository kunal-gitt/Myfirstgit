
const posts = [{

    title: "Post one",
    body: "This is post one",
    createdAt: Date.now()

}, {

    title: "Post two",
    body: "This is post two",
    createdAt: Date.now(),

}];



const user = [{

    name: "kunal",
    lastactivitytimeofuser: "4th of nov "
}];

let intervalid = 0;

function getpost() {

    setTimeout(() => {

        let output = '';

        posts.forEach((post) => {

            output += `<li>${post.title} - last updated ${(Date.now() - post.createdAt) / 1000} seconds </li>`;

        });

        document.body.innerHTML = output;


    }, 1000)

}


function createpost(post) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            posts.push({ ...post, createdAt: Date.now() });

            const err = false;

            if (!err) {
                resolve();
            }
            else {

                reject("Error: Something went wrong");
            }

        }, 2000);



    })

}


async function deletepost() {

    await new Promise((resolve, reject) => {

        setTimeout(() => {

            if (posts.length > 0) {

                
                resolve(posts.pop());

            } else {

                reject("Array is empty now");
            }


        }, 1000);



    })


}


function updatelastuseractivitytime() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const error = false;
            if (!error) {
                user.lastactivitytimeofuser = Date.now();
                resolve(user.lastactivitytimeofuser)
            }
            else {

                reject("Error in update last activity time ")
            }


        }, 3000);



    })





}


function updatetime() {

    Promise.all([create4post, updatelastuseractivitytime])
        .then(  ([createpostresolves, updatelastuseractivitytimeresolves]) => {
            
            console.log (updatelastuseractivitytimeresolves());

            

        }).catch((err) => { console.log(err) });
}


async function create4post(post) {


    await new Promise((resolve, reject) => {

        setTimeout(() => {

            posts.push({ ...post, createdAt: Date.now() });

            const err = false;

            if (!err) {

                resolve();
            }
            else {

                reject("Error :Post 4 error");
            }

        }, 3000);

    })
}





createpost({ title: "Post three", body: "this is post three" });


create4post({ title: "Post 4", body: "this is post4" }).then(() => {


    getpost();
    deletepost().then(() => {
        getpost();
        deletepost().then(() => {
            getpost();
            deletepost().then(() => {
                getpost();
                deletepost().then(() => {
                    getpost();
                    deletepost().then(() => {console.log("running")})
                        .catch((err) => {
                            console.log("inside catch block", err);
                        })
                })

            })
        })
    })

})
    .catch((err => { console.log(err) }));

updatelastuseractivitytime();
updatetime();





// promise.all


const promise1 = Promise.resolve("hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "goodbye");
})


//Promise.all([promise1, promise2, promise3]).then((values) => { console.log(values) });






