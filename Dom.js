
let form = document.getElementById("addForm");
let itemlist = document.getElementById('items');


form.addEventListener('submit' , addItem);

itemlist.addEventListener('click' , removeItem);


//add item
function addItem(e){
    
    e.preventDefault();

    let newitem = document.getElementById("item").value;


    let li = document.createElement("li");

    li.className = "list-group-item";

    li.appendChild(document.createTextNode(newitem));

    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode("X"));

    li.appendChild(deleteBtn);


    var EditBtn = document.createElement('button');

    EditBtn.className = "edit";


    EditBtn.appendChild(document.createTextNode("edit"));

    EditBtn.style.backgroundColor = "Red";
    EditBtn.style.color = "white";
    EditBtn.style.border = "none";
    EditBtn.style.float = "right";
    EditBtn.style.padding = "5px";
    EditBtn.style.margin = "5px";
    

    li.appendChild(EditBtn);






    itemlist.appendChild(li);


   

}


function removeItem(e){

    if(e.target.classList.contains('delete')){

        if(confirm("Are you sure")){

            let li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }

}



