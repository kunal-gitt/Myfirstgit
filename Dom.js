
// console.dir(document);
// console.log(document.URL);
// console.log(document.title);


// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// // Get element by Id


// let headerTitle = document.getElementById("header-title");
// let header = document.getElementById("main-header");
// console.log(headerTitle);

// //difference bet textcontent and innertext 
// //innertext pays attention to the style as well

// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);

// headerTitle.innerHTML = "<h3>Hello</h3>";

// header.style.borderBottom = "solid 3px #000";

// let add = document.querySelector(".title");

// add.style.fontWeight = "bold";
// add.style.color = "green";


// //Get element by class name

// let  items = document.getElementsByClassName("list-group-item");

// console.log(items);


// console.log(items[1]);

// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// for(let i = 0 ; i < items.length ; i++){

//     items[i].style.backgroundColor = "#f4f4f4";
//     items[i].style.fontWeight = "bold";
// }

// items[2].style.backgroundColor = "green";

// // Get element by Tag name


// let  li = document.getElementsByTagName("li");

// console.log(li);


// console.log(li[1]);

// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// for(let i = 0 ; i < li.length ; i++){

//     li[i].style.backgroundColor = "#f4f4f4";
//     li[i].style.fontWeight = "bold";
// }

// li[2].style.backgroundColor = "green";


// //Query selector

// // let headers = document.querySelector("#main-header");
// // headers.style.borderBottom = "solid 4px #ccc";

// // let input = document.querySelector("input");
// // input.value = "hello world";


// // let submit = document.querySelector("input[type='submit']");

// // submit.value = "SEND";

// // let item = document.querySelector(".list-group-item");
// // item.style.color = "red";

// // let lastchild = document.querySelector(".list-group-item:last-child");
// // lastchild.style.color = "Blue";

// // let secondchild = document.querySelector(".list-group-item:nth-child(2)");
// // secondchild.style.backgroundColor = "green";


// // let thirdchild = document.querySelector(".list-group-item:nth-child(3)");
// // thirdchild.style.display = "none";




// //Query selector all

// let titles = document.querySelectorAll(".title");

// console.log(titles);
// titles[0].textContent = "Hello";


// let input = document.querySelectorAll("input");
// console.log(input);




// let odd = document.querySelectorAll("li:nth-child(odd)");
// let even = document.querySelectorAll("li:nth-child(even)");

// for(let i = 0 ; i < odd.length ; i++){

//     odd[i].style.backgroundColor = "green";
//     even[i].style.backgroundColor = "#ccc";
// }

//  let item = document.querySelectorAll("");


//  item[1].style.color = "green";


 //Queryselector takes single items
 //Queryselectorall takes multiple items


 

// Traversing the dom


//Parent element/parent node

let itemlist = document.querySelector("#items");

console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = "#f4f4f4";
console.log(itemlist.parentElement.parentElement.parentElement);

//childnode / child element

console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor = "Yellow";

// first child
console.log(itemlist.firstChild);
// first element child
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent = "Hello 1";

// last child
console.log(itemlist.lastChild);
// last element child
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent = "Hello 4";


//next sibling
console.log(itemlist.nextSibling);

//next element sibling

console.log(itemlist.nextElementSibling);

//previous sibling

console.log(itemlist.previousSibling);

//  previous element sibling

console.log(itemlist.previousElementSibling);



//Create element


//create div

let newdiv = document.createElement("div");

//add class
newdiv.className = "hello";

//add id
newdiv.id = "hello1";

//add attr
newdiv.setAttribute("title" , "Hello div");

//create textnode
let newdivtext = document.createTextNode("Hello world");

// add text to div
newdiv.appendChild(newdivtext);

console.log(newdiv);


let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");

container.insertBefore(newdiv , h1);


let ul = document.querySelector("container .list-group");
let h2 = document.querySelectorAll("h2");

console.log(h2[1]);

h2[1].insertBefore(newdiv , ul);





