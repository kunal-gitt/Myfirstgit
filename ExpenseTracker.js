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
       // "id" : new Date().getTime()
         
   }


   let myobj_serial = JSON.stringify(expensedetails);


   localStorage.setItem( expensedetails.amount, myobj_serial);

   

   showNewUserOnScreen(expensedetails);


   function showNewUserOnScreen(expense) {


    document.getElementById("amount").value = "";
    document.getElementById("desc").value = "";
    document.getAnimations('category').value = "";

            
            
        
            let parentNode = document.getElementById("listOfUser");
            let childhtml = `<li id= ${expense.amount}> ${expense.amount} - ${expense.description} - ${expense.category}
                                    <button onClick = deleteUser('${expense.amount}')> Delete expense </button> 
                                    <button onclick = editUser('${expense.amount}','${expense.description}','${expense.category}')> Edit expense </button>
                            </li>`;
        
        
            parentNode.innerHTML = parentNode.innerHTML + childhtml;
          }


        

    
}

function deleteUser(amount) {
    localStorage.removeItem(amount);
    removefromscreen(amount);

  }

  function editUser(amount , description , category){

    document.getElementById("amount").value = amount;
    document.getElementById("desc").value = description;
    document.getAnimations('category').value = category;
   
    deleteUser(amount);


}



function removefromscreen(amount){

    let parentNode = document.getElementById("listOfUser");
    let childnodetobedeleted = document.getElementById(amount);

    if(childnodetobedeleted){

        parentNode.removeChild(childnodetobedeleted);
    }

  }
