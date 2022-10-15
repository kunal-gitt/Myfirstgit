
let form = document.getElementById("addForm");
let itemlist = document.getElementById('items');
let filter = document.getElementById('filter');
let input = document.getElementById("item");


form.addEventListener('submit' , addItem);

itemlist.addEventListener('click' , removeItem);

filter.addEventListener('keyup' , filterItems);

input.addEventListener('keyup' , inputItems);

//add item
function addItem(e){
    
    e.preventDefault();

    let newitem = document.getElementById("item").value;
    let newdesc = document.getElementById("item2").value;


    let li = document.createElement("li");

    li.className = "list-group-item";

    li.appendChild(document.createTextNode(newitem));
    li.appendChild(document.createTextNode(" "+ newdesc));

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


function filterItems(e){
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    // Get lis
    let items = itemlist.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      let itemName = item.firstChild.textContent;
      let itemName2 = item.childNodes[1].textContent;

      console.log(itemName2);

      if(itemName.toLowerCase().indexOf(text) != -1 || itemName2.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
 

  function inputItems(e){

    let text = e.target.value.toLowerCase();
    // Get lis
    let items = itemlist.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      let itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
      
  }



