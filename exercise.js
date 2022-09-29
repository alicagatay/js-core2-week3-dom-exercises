/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
let element =document.querySelectorAll("p")
console.log(element)

let elements =document.querySelector("div")
console.log(element)

let jumbotron=document.querySelector("#jumbotron-text")
console.log(jumbotron)

let pElements= document.querySelector(".primary-content")
const p= pElements.querySelectorAll("p")
console.log(p)

/*
Task 2
======
 alertButton.addEventL

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertButton = document.querySelector("#alertBtn");
function alertF(){
    alert("Thanks for visiting Bikes for Refugees")
}
alertButton.addEventListener("click", alertF);

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let changeColorBtn = document.getElementById("bgrChangeBtn");
let body = document.querySelector("body");
changeColorBtn.addEventListener("click", () => {
body.style.backgroundColor = "pink";
}); 
/*


Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let addText = document.getElementById("addTextBtn");
let JumTxt = document.querySelector(".jumbotron");
addText.addEventListener("click",()=>{
    const newP = document.createElement("p");
    newP.innerText =" oku beni"
    JumTxt.appendChild(newP)
})   


/*All
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let addLargerLinks = document.getElementById("largersLinksBtn")
let allLinks =document.querySelectorAll("a");

