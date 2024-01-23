/**
Make anote that HTML is structured like a tree, but we can also condsider its components to be like an object. 

ex. 
<h1 class ="heading" id="myName" style="color:'dodgerblue'">Satch</h1>

is the same as...

let h1 = {
    class: "heading",
    id: "myName",
    style: {
        color: "dodgerblue"
    },
    innerText: "Satch"
}

*Inner text is the same as created a p element

_________________________

Ways to Access the DOM Elemets
We can access the DOM by idenfiying/calling for a single element or all elments that have the same tag or attribute. 

Method 1: Single Elements
single element by ID:
document.getElementById()
** I can also put this DOM directly into a variable or container and update it as often as I need

let myName = document.getElementById('myName)

single element by css selector:
docuemnt.querySelector()
let textBox = document.querySelector('.textBox')

** using a query will return the first matching element only!

Method 2: Multiple Elements
Select all elements by tag:
document.getElementsByTagName()
let paragraphs = document.getElementsByTagName('p')

Select all elements by css selector:
docuemtn.querySelectorAll()
let textBox = document.querySelectorAll('.textBox')

 */

let myName = document.getElementById("myName");
myName.innerText = "Krystal";


const thingsILike = [
    "item",
    "item",
    5
];

const myList = document.getElementById("myList");
thingsILike.forEach(item => {
    const li = document.createElement('li');
    li.innerText = "item on my list";
    myList.appendChild(li);
})

let textColor = myName.querySelector("p");
textColor.style.color = "red";