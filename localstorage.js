let form = document.getElementById("my-form");



form.addEventListener('submit' , onsubmit);

window.addEventListener("DOMContentLoaded", () =>{
  axios.get("https://crudcrud.com/api/174a218e01824bada1d2407b3dc08ffb/appointmentdata")
  .then(response =>{

    console.log(response);

    for(let i = 0 ; i < response.data.length ; i++){

      showNewUserOnScreen(response.data[i]);
    }
  }).catch(err => console.log(err));
} )


function onsubmit(e){
 
     e.preventDefault();

      let userinput = document.getElementById("username").value;
      let useremail = document.getElementById("email").value;
      let userphone = document.getElementById("phone").value;




      

      
      let userdetails = {

           "username" : userinput,
           "email" : useremail,
           "phone" : userphone
      }

      

      axios.post("https://crudcrud.com/api/174a218e01824bada1d2407b3dc08ffb/appointmentdata" , userdetails)
      .then((response) => {
         showNewUserOnScreen(response.data);
        console.log(response)})
      .catch(err => {
        document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong </h4>"; 
        console.log(err)});

    


      // let myobj_serial = JSON.stringify(userdetails);

      
      // localStorage.setItem( userdetails.email, myobj_serial);

      
      //showNewUserOnScreen(userdetails);


     



 

        
    
}

function showNewUserOnScreen(user) {


  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getAnimations('phone').value = "";

           if(localStorage.getItem(user.email) !== null){

              removefromscreen(user.email);
           }
          
      
          let parentNode = document.getElementById("listOfUser");
          let childhtml = `<li id= ${user._id}> ${user.username} - ${user.email}
                                  <button onClick = deleteUser('${user._id}')> Delete </button> 
                                  <button onclick = editUser('${user.email}','${user.username}','${user.phone}')> Edit </button>
                          </li>`;
      
      
          parentNode.innerHTML = parentNode.innerHTML + childhtml;
        }



function deleteUser(userId) {

  axios.delete(`https://crudcrud.com/api/174a218e01824bada1d2407b3dc08ffb/appointmentdata/${userId}`)
  .then((response) =>{
    removefromscreen(userId);
    console.log(response)})
  .catch(err => console.log(err));

    

  }


  function editUser(emailId , username , phone){

         document.getElementById("username").value = username;
         document.getElementById("email").value = emailId;
         document.getAnimations('phone').value = phone;
        
         deleteUser(emailId);


  }

  function removefromscreen(userId){

    let parentNode = document.getElementById("listOfUser");
    let childnodetobedeleted = document.getElementById(userId);

    if(childnodetobedeleted){

        parentNode.removeChild(childnodetobedeleted);
    }

  }