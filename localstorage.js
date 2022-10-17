let form = document.getElementById("my-form");


form.addEventListener('submit' , onsubmit);


function onsubmit(e){
 
     e.preventDefault();

      let userinput = document.getElementById("username").value;
      let userpassword = document.getElementById("password").value;

      
      let myobj = {

           "username" : userinput,
           "password" : userpassword
      }

      let myobj_serial = JSON.stringify(myobj);

      localStorage.setItem("myobj" , myobj_serial);
      localStorage.setItem("username", userinput);
      localStorage.setItem("password" , userpassword);


}