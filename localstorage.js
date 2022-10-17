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

      console.log(myobj_serial);
      console.log(userdetails.email);

      localStorage.setItem( userdetails.email, myobj_serial);

      let s = localStorage.getItem(userdetails.email);

      console.log(s);
      showNewUserOnScreen(userdetails);



      
       function showNewUserOnScreen(user){

        

            let parentNode = document.getElementById("listOfUser");
            let childhtml = `<li> ${user.username} - ${user.email}
                            <button onClick= ()= ${deleteUser(`${user.email}`)}> Delete </button>
                </li>`;

             parentNode.innerHTML = parentNode.innerHTML + childhtml;


            
       }


         function deleteUser(emailId){

                
                localStorage.removeItem(emailId);
         }

          

       


         
       //   if(localStorage.getItem(user.email) !== null ){

            //        removeUserFromScreen(user.email);
            //   }

    //    function removeUserFromScreen(emailId){

    //     let parentNode = document.getElementById("listOfUser");
    //     let childNodeToBeDeleted = document.getElementById(emailId);

    //       if(childNodeToBeDeleted){

    //         parentNode.removeChild(childNodeToBeDeleted);
    //       }
            
    //    }
         

       
       
      
         
        
     









      


      
      

    










}