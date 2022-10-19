let form = document.getElementById("my-form");



form.addEventListener('submit' , onsubmit);


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

      


    

      let myobj_serial = JSON.stringify(userdetails);

      
      localStorage.setItem( userdetails.email, myobj_serial);

      
      showNewUserOnScreen(userdetails);



 function showNewUserOnScreen(user) {


    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getAnimations('phone').value = "";

             if(localStorage.getItem(user.email) !== null){

                removefromscreen(user.email);
             }
            
        
            let parentNode = document.getElementById("listOfUser");
            let childhtml = `<li id= ${user.email}> ${user.username} - ${user.email}
                                    <button onClick = deleteUser('${user.email}')> Delete </button> 
                                    <button onclick = editUser('${user.email}','${user.username}','${user.phone}')> Edit </button>
                            </li>`;
        
        
            parentNode.innerHTML = parentNode.innerHTML + childhtml;
          }


        
    
}


function deleteUser(emailId) {
    localStorage.removeItem(emailId);
    removefromscreen(emailId);

  }


  function editUser(emailId , username , phone){

         document.getElementById("username").value = username;
         document.getElementById("email").value = emailId;
         document.getAnimations('phone').value = phone;
        
         deleteUser(emailId);


  }

  function removefromscreen(emailId){

    let parentNode = document.getElementById("listOfUser");
    let childnodetobedeleted = document.getElementById(emailId);

    if(childnodetobedeleted){

        parentNode.removeChild(childnodetobedeleted);
    }

  }