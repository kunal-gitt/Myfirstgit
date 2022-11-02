let form = document.getElementById("my-form");


form.addEventListener("submit" , onsubmit);



function onsubmit(e){


    e.preventDefault();

    let useramount = document.getElementById("amount").value;
    let userdescription = document.getElementById("desc").value;
    let usercategory = document.getElementById("category").value;

    
    

    let expensedetails = {

        "amount" : useramount,
        "description" : userdescription,
        "category" : usercategory,
        "id" : new Date().getTime()
         
   }


   let myobj_serial = JSON.stringify(expensedetails);


   localStorage.setItem( expensedetails.id, myobj_serial);

   

   showNewUserOnScreen(expensedetails);


   function showNewUserOnScreen(expense) {


    document.getElementById("amount").value = "";
    document.getElementById("desc").value = "";
    document.getAnimations('category').value = "";

            
            
        
            let parentNode = document.getElementById("listOfUser");
            let childhtml = `<li id= ${expense.id}> ${expense.amount} - ${expense.description} - ${expense.category}
                                    <button onClick = deleteUser('${expense.id}')> Delete expense </button> 
                                    <button onclick = editUser('${expense.amount}','${expense.description}','${expense.category}','${expense.id}')> Edit expense </button>
                            </li>`;
        
        
            parentNode.innerHTML = parentNode.innerHTML + childhtml;
          }


        

    
}

function deleteUser(id) {
    localStorage.removeItem(id);
    removefromscreen(id);

  }

  function editUser(amount , description , category ,id){

    document.getElementById("amount").value = amount;
    document.getElementById("desc").value = description;
    document.getElementById('category').value = category;
   
    deleteUser(id);


}



function removefromscreen(id){

    let parentNode = document.getElementById("listOfUser");
    let childnodetobedeleted = document.getElementById(id);

    if(childnodetobedeleted){

        parentNode.removeChild(childnodetobedeleted);
    }

  }
