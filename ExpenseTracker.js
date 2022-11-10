let form = document.getElementById("my-form");


form.addEventListener("submit" , onsubmit);


window.addEventListener("DOMContentLoaded" , () => {


  axios.get("https://crudcrud.com/api/857715054d374d8b9f2847a6db937125/expensedata")
  .then(response =>{

    console.log(response);

    for(let i = 0 ; i < response.data.length ; i++){

      showNewUserOnScreen(response.data[i]);
    }
  }).catch(err => console.log(err));

})



function onsubmit(e){


    e.preventDefault();

    let useramount = document.getElementById("amount").value;
    let userdescription = document.getElementById("desc").value;
    let usercategory = document.getElementById("category").value;

    
    

    let expensedetails = {

        "amount" : useramount,
        "description" : userdescription,
        "category" : usercategory,
        
         
   }


   axios.post("https://crudcrud.com/api/857715054d374d8b9f2847a6db937125/expensedata",expensedetails)
   .then((response) => { 
     showNewUserOnScreen(response.data);
    console.log(response)} )
    .catch((err) => {console.log(err)});



  //  let myobj_serial = JSON.stringify(expensedetails);


  //  localStorage.setItem( expensedetails.id, myobj_serial);

   

   //showNewUserOnScreen(expensedetails);


   

    
}


function showNewUserOnScreen(expense) {


  document.getElementById("amount").value = "";
  document.getElementById("desc").value = "";
  document.getAnimations('category').value = "";

          
          
      
          let parentNode = document.getElementById("listOfUser");
          let childhtml = `<li id= ${expense._id}> ${expense.amount} - ${expense.description} - ${expense.category}
                                  <button onClick = deleteUser('${expense._id}')> Delete expense </button> 
                                  <button onclick = editUser('${expense.amount}','${expense.description}','${expense.category}','${expense._id}')> Edit expense </button>
                          </li>`;
      
      
          parentNode.innerHTML = parentNode.innerHTML + childhtml;
        }



function deleteUser(userid) {
    axios.delete(`https://crudcrud.com/api/857715054d374d8b9f2847a6db937125/expensedata/${userid}`)
    .then((response) =>{
      removefromscreen(userid);
      console.log(response)})
    .catch(err => console.log(err));
    

  }

  function editUser(amount , description , category ,userid){

    document.getElementById("amount").value = amount;
    document.getElementById("desc").value = description;
    document.getElementById('category').value = category;
   
    deleteUser(userid);


}



function removefromscreen(userid){

    let parentNode = document.getElementById("listOfUser");
    let childnodetobedeleted = document.getElementById(userid);

    if(childnodetobedeleted){

        parentNode.removeChild(childnodetobedeleted);
    }

  }
