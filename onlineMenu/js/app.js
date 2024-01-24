const confirmBtn = document.getElementById("confirmBtn");
const totalDisplay = document.getElementById("total");
const cartSubtotal = document.getElementById("cartSubtotal");
const menuDivs = document.querySelectorAll(".menu-div");

let subtotal = 0;
let tax = 0.07;

const menuType = [
    "appetizers", 
    "entrees",
    "drinks",
    "desserts"
]

//array of menu objects
let menuItems = [
    {
        id: 1,
        type: "appetizers",
        item: "salt fish fritters",
        descripton: "fried salt fish fritters with chili dipping sauce", 
        imgUrl: "saltfishfritters.jpg", 
        price: 8.99,
        qty: 0,
    },
    {
        id: 2,
        type: "appetizers",
        item: "cream of callaloo soup",
        descripton: "vegetable-based soup", 
        imgUrl: "images/callaloosoup.jpg", 
        price: 6.99,
        qty: 0,
    },
    {
        id: 3,
        type: "appetizers",
        item: "ackee and saltfish plantain poppers",
        descripton: "ackee and saltfish served in fried plantain cups", 
        imgUrl: "images/acksaltpop.jpg", 
        price: 8.99,
        qty: 0,
    },
    {
        id: 4,
        type: "appeitzers",
        item: "mini beef patties",
        descripton: "6 mini Jamacian beef patties", 
        imgUrl: "images/minibeefpatties.jpg", 
        price: 9.99,
        qty: 0,
    },
    {
        id: 5,
        type: "entrees",
        item: "Oxtails",
        descripton: "Oxtails with rice adn plantains", 
        imgUrl: "images/oxtails.jpg", 
        price: 22.99,
        qty: 0,
    },
    {
        id: 6,
        type: "entrees",
        item: "Curry Goat",
        descripton: "Curry Goat with rice and peas, cabbage, and plantains", 
        imgUrl: "images/currygoat.jpg", 
        price: 20.99,
        qty: 0,
    },
    {
        id: 7,
        type: "entrees",
        item: "Fried Cabbage",
        descripton: "Sauteed cabbage with rice and peas and plantains", 
        imgUrl: "images/cabbage.jpg", 
        price: 16.99,
        qty: 0,
    },
    {
        id: 8,
        type: "entrees",
        item: "Jerk Shrimp",
        descripton: "Sauteed jerk shrimp with rice and peas and plantains", 
        imgUrl: "images/jerkshrimp.jpg", 
        price: 22.99,
        qty: 0,
    },
    {
        id: 9,
        type: "drinks",
        item: "Ginger Beer",
        descripton: "traditional ginger beer made fresh daily", 
        imgUrl: "images/gingerbeer.jpg", 
        price: 3.99,
        qty: 0,
    },
    {
        id: 10,
        type: "drinks",
        item: "Sorrel (Hibiscus) Juice",
        descripton: "hibiscus juice made fresh daily", 
        imgUrl: "images/sorreljuice.jpg", 
        price: 3.99,
        qty: 0,
    },
    {
        id: 11,
        type: "drinks",
        item: "Pineapple Ginger Juice",
        descripton: "pineapple and ginger juice made fresh daily", 
        imgUrl: "images/pineappleginger.jpg", 
        price: 3.99,
        qty: 0,
    },
    {
        id: 12,
        type: "drinks",
        item: "Can Soda",
        descripton: "canned coca-cola soda", 
        imgUrl: "images/cansoda.jpg", 
        price: 1.99,
        qty: 0,
    },
    {
        id: 13,
        type: "desserts",
        item: "Sweet Potato Pudding",
        descripton: "sweet potato pudding", 
        imgUrl: "images/pudding.jpeg", 
        price: 4.99,
        qty: 0,
    },
    {
        id: 14,
        type: "desserts",
        item: "Gizzada",
        descripton: "spiced coconut tart", 
        imgUrl: "images/gizzada.jpg", 
        price: 3.99,
        qty: 0,
    },
    {
        id: 15,
        type: "desserts",
        item: "Rum Cake",
        descripton: "rum cake", 
        imgUrl: "images/rumcake.jpg", 
        price: 4.99,
        qty: 0,
    },
    {
        id: 16,
        type: "desserts",
        item: "Mango Cheesecake",
        descripton: "spiced mango cheesecake", 
        imgUrl: "images/mangocheesecake.jpg", 
        price: 4.99,
        qty: 0,
    }
]

confirmBtn.addEventListener("click", (e)=> {
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

    taxDisplay.innerText = taxTotal.toFixed(2);
    yourTip.innerText = receiptTip.toFixed(2);
    totalDisplay.innerText = total.toFixed(2);
}

//create menu type labels for each category of food
menuDivs.forEach(div =>{
    const menuSubheading = document.createElement("h3");
    menuSubheading.classList.add("menu-subheading", "text-capitalize");

    const row = document.createElement("div");
    row.classList.add("row");

    div.appendChild(menuSubheading);
    div.appendChild(row);
});

for (let i = 0; i < menuType.length; i++) {
    menuDivs[i].children[0].innerText = menuType[i]
    menuDivs[i].children[1].setAttribute("id", `${menuType[i]}Row`);
}

/* <img src="images/acksaltpop.jpg" alt="ackee and saltfish plantain poppers" class="img-fluid menu-img card-image-top"/>
                    <div class="card-body">
                        <h4 class="card-title text-capitalize item-item">Name of Item</h4>
                        <p class="card-text text-uppercase item-desc">Desc of Item</p>
                    </div>
                    <footer class="card-footer">
                        <p class="card-text item-price">$dollars</p>
                        <div class="buttons-div d-flex">
                            <button 
                            class="btn btn-primary cart-btn text-capitalize"
                            id="btnNumberOfItem"
                            data-id=""
                            data-price=""
                            data-qty=""
                            data-item=""
                            >add to cart</button>
                            <div class="qty-div">
                                <button
                                class="btn btn-secondary btn-subtract"
                                id="btnSubtractItemId"
                                data-id=""
                                data-qty=""
                                > - </button>
                                <span class="quantity" id="quantityItemId">Number</span>
                                <button
                                class="btn btn-secondary btn-add"
                                id="btnAddItemId"
                                data-id=""
                                data-qty=""
                                > + </button>
                            </div>
                        </div>
                    </footer> */