
console.dir(document);
console.log(document.URL);
console.log(document.title);


console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);


let headerTitle = document.getElementById("header-title");
let header = document.getElementById("main-header");
console.log(headerTitle);

//difference bet textcontent and innertext 
// innertext pays attention to the style as well

console.log(headerTitle.textContent);
console.log(headerTitle.innerText);

headerTitle.innerHTML = "<h3>Hello</h3>";

header.style.borderBottom = "solid 3px #000";

let add = document.querySelector(".title");

add.style.fontWeight = "bold";
add.style.color = "green";


//Get element by class name

let  items = document.getElementsByClassName("list-group-item");

console.log(items);


console.log(items[1]);

items[1].textContent = "Hello 2";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor = "yellow";

for(let i = 0 ; i < items.length ; i++){

    items[i].style.backgroundColor = "#f4f4f4";
}