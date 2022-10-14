
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


// search for example i am pushing this file


