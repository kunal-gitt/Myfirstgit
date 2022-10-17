let form = document.getElementById("my-form");


form.addEventListener('submit' , onsubmit);


function onsubmit(e){
 
     e.preventDefault();

      let userinput = document.getElementById("username").value;
      let userpassword = document.getElementById("password").value;

      console.log(userinput);


      localStorage.setItem("username", userinput);
      localStorage.setItem("password" , userpassword);


}