let form = document.getElementById("my-form");


form.addEventListener('submit' , onsubmit);


function onsubmit(e){
 
     e.preventDefault();

      let userinput = document.getElementById("username").value;
      let userpassword = document.getElementById("email").value;
      let userphone = document.getElementById("phone").value;

      
      let userdetails = {

           "username" : userinput,
           "email" : useremail,
           "phone" : userphone
      }

      


    

      let myobj_serial = JSON.stringify(userdetails);

      localStorage.setItem( userdetails.email, myobj_serial);

      

    










}