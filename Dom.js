
console.dir(document);
console.log(document.URL);
console.log(document.title);


console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

// Get element by Id


let headerTitle = document.getElementById("header-title");
let header = document.getElementById("main-header");
console.log(headerTitle);

//difference bet textcontent and innertext 
//innertext pays attention to the style as well

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
    items[i].style.fontWeight = "bold";
}

items[2].style.backgroundColor = "green";

// Get element by Tag name


let  li = document.getElementsByTagName("li");

console.log(li);


console.log(li[1]);

li[1].textContent = "Hello 2";
li[1].style.fontWeight = "bold";
li[1].style.backgroundColor = "yellow";

for(let i = 0 ; i < li.length ; i++){

    li[i].style.backgroundColor = "#f4f4f4";
    li[i].style.fontWeight = "bold";
}

li[2].style.backgroundColor = "green";


//Query selector

let headers = document.querySelector("#main-header");
headers.style.borderBottom = "solid 4px #ccc";

let input = document.querySelector("input");
input.value = "hello world";


let submit = document.querySelector("input[type='submit']");

submit.value = "SEND";

let item = document.querySelector(".list-group-item");
item.style.color = "red";

let lastchild = document.querySelector(".list-group-item:last-child");
lastchild.style.color = "Blue";

let secondchild = document.querySelector(".list-group-item:nth-child(2)");
secondchild.style.backgroundColor = "green";

let thirdchild = document.querySelector(".list-group-item:nth-child(3)");
thirdchild.style.display = "none";





