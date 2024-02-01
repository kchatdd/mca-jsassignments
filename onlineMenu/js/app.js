const confirmBtn = document.getElementById("confirmBtn");
const totalDisplay = document.getElementById("total");
const cartSubtotal = document.getElementById("cartSubtotal");
const menuDivs = document.querySelectorAll(".menu-div");
const receipt = document.getElementById("receipt");

let subtotal = 0;
let tax = 0.07;

let receiptArray = [];
const menuType = [
    "appetizers", 
    "entrees",
    "drinks",
    "desserts"
];

//array of menu objects
let menuItems = [
    {
        id: 1,
        type: "appetizers",
        item: "salt fish fritters",
        desc: "fried salt fish fritters with chili dipping sauce", 
        imgUrl: "saltfishfritters.jpg", 
        price: 8.99,
        qty: 0,
    },
    {
        id: 2,
        type: "appetizers",
        item: "cream of callaloo soup",
        desc: "vegetable-based soup", 
        imgUrl: "callaloosoup.jpg", 
        price: 6.99,
        qty: 0,
    },
    {
        id: 3,
        type: "appetizers",
        item: "ackee and saltfish plantain poppers",
        desc: "ackee and saltfish served in fried plantain cups", 
        imgUrl: "acksaltpop.jpg", 
        price: 8.99,
        qty: 0,
    },
    {
        id: 4,
        type: "appetizers",
        item: "mini beef patties",
        desc: "6 mini Jamacian beef patties", 
        imgUrl: "minibeefpatties.jpg", 
        price: 9.99,
        qty: 0,
    },
    {
        id: 5,
        type: "entrees",
        item: "Oxtails",
        desc: "Oxtails with rice adn plantains", 
        imgUrl: "oxtails.jpg", 
        price: 22.99,
        qty: 0,
    },
    {
        id: 6,
        type: "entrees",
        item: "Curry Goat",
        desc: "Curry Goat with rice and peas, cabbage, and plantains", 
        imgUrl: "currygoat.jpg", 
        price: 20.99,
        qty: 0,
    },
    {
        id: 7,
        type: "entrees",
        item: "Fried Cabbage",
        desc: "Sauteed cabbage with rice and peas and plantains", 
        imgUrl: "cabbage.jpg", 
        price: 16.99,
        qty: 0,
    },
    {
        id: 8,
        type: "entrees",
        item: "Jerk Shrimp",
        desc: "Sauteed jerk shrimp with rice and peas and plantains", 
        imgUrl: "jerkshrimp.jpg", 
        price: 22.99,
        qty: 0,
    },
    {
        id: 9,
        type: "drinks",
        item: "Ginger Beer",
        desc: "traditional ginger beer made fresh daily", 
        imgUrl: "gingerbeer.jpg", 
        price: 3.99,
        qty: 0,
    },
    {
        id: 10,
        type: "drinks",
        item: "Sorrel (Hibiscus) Juice",
        desc: "hibiscus juice made fresh daily", 
        imgUrl: "sorreljuice.jpg", 
        price: 3.99,
        qty: 0,
    },
    {
        id: 11,
        type: "drinks",
        item: "Pineapple Ginger Juice",
        desc: "pineapple and ginger juice made fresh daily", 
        imgUrl: "pineappleginger.jpg", 
        price: 3.99,
        qty: 0,
    },
    {
        id: 12,
        type: "drinks",
        item: "Can Soda",
        desc: "canned coca-cola soda", 
        imgUrl: "cansoda.jpg", 
        price: 1.99,
        qty: 0,
    },
    {
        id: 13,
        type: "desserts",
        item: "Sweet Potato Pudding",
        desc: "sweet potato pudding", 
        imgUrl: "pudding.jpeg", 
        price: 4.99,
        qty: 0,
    },
    {
        id: 14,
        type: "desserts",
        item: "Gizzada",
        desc: "spiced coconut tart", 
        imgUrl: "gizzada.jpg", 
        price: 3.99,
        qty: 0,
    },
    {
        id: 15,
        type: "desserts",
        item: "Rum Cake",
        desc: "rum cake", 
        imgUrl: "rumcake.jpg", 
        price: 4.99,
        qty: 0,
    },
    {
        id: 16,
        type: "desserts",
        item: "Mango Cheesecake",
        desc: "spiced mango cheesecake", 
        imgUrl: "mangocheesecake.jpg", 
        price: 4.99,
        qty: 0,
    }
]

confirmBtn.addEventListener("click", (e)=> {
    //preventDefault cancels any predetermeined action that would occur when the input/action is received
    e.preventDefault()
    //function that will calculate the total amt the customer pays
    getTotal();
});

const getTotal =()=> {

    const subtotal = parseFloat(cartSubtotal.innerText);
    const tipAmt = parseFloat(document.getElementById("tipAmt").value);
    const otherAmt = parseFloat(document.getElementById("otherAmt").value);
    const yourTip = document.getElementById("tipTotal");
    const theSubtotal = document.getElementById("theSubtotal");
    const taxDisplay = document.getElementById("tax");

    let taxTotal = subtotal * tax;
    console.log(`this is the amount of tax to be charged: ${taxTotal}`);

    let receiptTip = isNaN(tipAmt) ? otherAmt : (subtotal * tipAmt);
    console.log(`this is the amount of tip calculated: ${receiptTip}`);

    let total = isNaN(tipAmt) ? subtotal + taxTotal + otherAmt : subtotal + taxTotal + receiptTip;
    console.log(`this is the total to pay: ${total}`);

    theSubtotal.innerText = subtotal;
    taxDisplay.innerText = taxTotal.toFixed(2);
    yourTip.innerText = receiptTip.toFixed(2);
    totalDisplay.innerText = total.toFixed(2);
}

//make a receipt that populates food order information based on the menu items listed in the array
const makeReceipt = (obj, el)=>  {
    const tableRow = document.createElement("tr");
    tableRow.classList.add("receipt-item");

    const receiptChoice = document.createElement("td");
    receiptChoice.classList.add("receipt-choice", "text-center");
    receiptChoice.innerText = obj.item;

    const receiptQty = document.createElement("td");
    receiptQty.classList.add("recepit-qty", "text-center");
    receiptQty.setAttribute("id", `qty${obj.id}`);
    receiptQty.innerText = obj.qty;

    const receiptPrice = document.createElement("td");
    receiptPrice.classList.add("receipt-price", "text-center");
    receiptPrice.innerText = obj.price;

    const itemSubtotal = document.createElement("td");
    itemSubtotal.classList.add("item-subtotal", "text-center");
    itemSubtotal.setAttribute("id", `subTotal${obj.id}`);
    itemSubtotal.innerText = obj.itemTotal;

    tableRow.appendChild(receiptChoice);
    tableRow.appendChild(receiptQty);
    tableRow.appendChild(receiptPrice);
    tableRow.appendChild(itemSubtotal);

    el.appendChild(tableRow)
};

const updateReceipt = (obj, qty, itemTotal) =>{
    const receiptQty = document.getElementById(`qty${obj.id}`)
    receiptQty.innerText = qty;

    const itemSubtotal = document.getElementById(`subTotal${obj.id}`);
    itemSubtotal.innerText = itemTotal.toFixed(2);

    console.log(receiptArray);
}

//create menu type labels for each category of food
menuDivs.forEach(div =>{
    const menuSubheading = document.createElement("h3");
    menuSubheading.classList.add("menu-subheading", "text-capitalize");

    const row = document.createElement("div");
    row.classList.add("row");

    //using appendChild adds the element into the DOM otherwise it is just hanging out freely, not associated with something in the document tree
    div.appendChild(menuSubheading);
    div.appendChild(row);
});

for (let i = 0; i < menuType.length; i++) {
    menuDivs[i].children[0].innerText = menuType[i]
    menuDivs[i].children[1].setAttribute("id", `${menuType[i]}Row`);
}

//populate menu items
//put the food type rows into containers in the DOM

const appRow = document.getElementById("appetizersRow");
const entreesRow = document.getElementById("entreesRow")
const drinksRow = document.getElementById("drinksRow");
const dessertsRow = document.getElementById("dessertsRow");

//take each object in the MenuItems array create a column div for the card to "live" in and then create a card div for the HMTL we created to occupy
menuItems.forEach(item => {
    const column = document.createElement("div");
    column.classList.add("col-md-3");

    const card = document.createElement("div");
    card.classList.add("card", "h-100");
    card.innerHTML = `
    <img src="images/${item.imgUrl}" alt="${item.desc}" class="img-fluid menu-img card-image-top"/>
                    <div class="card-body">
                        <h4 class="card-title text-capitalize item-item">${item.item}</h4>
                        <p class="card-text text-uppercase item-desc">${item.desc}</p>
                    </div>
                    <footer class="card-footer">
                        <p class="card-text item-price">$${item.price}</p>
                        <div class="buttons-div d-flex">
                            <button 
                            class="btn btn-primary cart-btn text-capitalize"
                            id="Btn${item.id}"
                            data-id="${item.id}"
                            data-price="${item.price}"
                            data-qty="${item.qty}"
                            data-item="${item.item}"
                            >add to cart</button>
                            <div class="qty-div">
                                <button
                                class="btn btn-secondary btn-subtract"
                                id="btnSubtract${item.id}"
                                data-id="${item.id}"
                                data-qty="${item.qty}"
                                > - </button>
                                <span class="quantity" id="quantity${item.id}">${item.qty}</span>
                                <button
                                class="btn btn-secondary btn-add"
                                id="btnAdd${item.id}"
                                data-id="${item.id}"
                                data-qty="${item.qty}"
                                > + </button>
                            </div>
                        </div>
                    </footer>
    `
    column.appendChild(card);

    // we cannot use appRow.appendChild(column), because it will push all of the menu item cards into just one section. To make our program sort the cards into the correct category, we will use a switch case

    switch (item.type) {
        case "appetizers":
            appRow.appendChild(column)
            break;
        case "entrees":
            entreesRow.appendChild(column)
            break;
        case "drinks":
            drinksRow.appendChild(column)
            break;
        case "desserts":
            dessertsRow.appendChild(column)
            break;
        default:
            console.log("Error: menu type not listed")
            break;
    }
})

const cartButtons = document.querySelectorAll(".cart-btn")

//make the button for Add to Cart work
cartButtons.forEach(button => {
    const price = parseFloat(button.getAttribute("data-price"))
    const item = button.getAttribute("data-item")
    const id = parseFloat(button.getAttribute("data-id"))

    button.addEventListener("click", () => {
        console.log("the add to cart button has been clicked.")
        let qty;
        for (let i = 0; i < menuItems.length; i++){
            menuItems[i].id == id ? qty = menuItems[i].qty : null;
        }
        //we need to be able to add items to the receipt
        addItems(price, qty, item, id);
    })
})

const addItems = (price, qty, item, id) => {
    let itemObj = {
        id,
        item,
        qty,
        price,
        itemTotal: qty * price
    }

    receiptArray = [...receiptArray, itemObj]
    makeReceipt(itemObj, receipt)

    subtotal+= itemObj.itemTotal;
    cartSubtotal.innerText = subtotal.toFixed(2);
}

const btnSubtract = document.querySelectorAll(".btn-subtract");
const btnAdd = document.querySelectorAll(".btn-add");

btnSubtract.forEach(button => {
    button.addEventListener("click", () => {
        const btnId = parseFloat(button.getAttribute("data-id"));
        const spanQty = document.getElementById(`quantity${btnId}`);

        for (let i = 0; i < menuItems.length; i++) {
            if(menuItems[i].id == btnId && menuItems[i].qty > 0){
                menuItems[i].qty-=1
                spanQty.innerText = menuItems[i].qty
            }
        }
    })
})

btnAdd.forEach(button => {
    button.addEventListener("click", () => {
        const btnId = parseFloat(button.getAttribute("data-id"));
        const spanQty = document.getElementById(`quantity${btnId}`);

        for (let i = 0; i < menuItems.length; i++){
            if (menuItems[i].id == btnId && menuItems[i].qty < 20 && cartButtons[i].dataset.id == btnId) {
                menuItems[i].qty+=1
                cartButtons[i].setAttribute("data-qty", menuItems[i].qty)
                spanQty.innerText = menuItems[i].qty;
            }
        }
    })
})
