/**Array Methods
There are so many things that arrays can do. There are a lot of ways you can manipulate the content in an array to get a desired output. 

toString()
join()
concat()
splice()
slice()
indexOf()
lastIndexOf()
map()
filter()
find()
findIndex()
sort()

These are only a few of the array methods in existence. Want to learn more? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at 

Use the left navigation to explore different types of array methods
 */

//various arrays for examples
var groceryList = [
    "apples",
    "bananas",
    "potato chips",
    "orange juice",
    "onion powder",
    "cherries",
    "almonds"
]

var shirts = [
    "solid black t-shirt",
    "pink halter top",
    "green plaid long-sleeve shirt",
    "CSTA conference t-shirt"
];

var bottoms = [
    "dark denim jeans",
    "black yoga pants",
    "khaki shorts",
    "leather mini-skirt"
];

var shoes = [
    "green crocs",
    "black combat boots",
    "black power Jordans",
    "fuzzy house slippers"
];

var animals = ["bat", "chicken", "rabbit", "orangutan", "chimpanzee", "elephant", "muskrat", "boar", "crocodile", "iguana", "beetle"];

var evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];


/* toString 
.toString merges all items in an array into one string. Beware the string will have the commas but no spaces between each item. Ex: ["apples", "oranges", "bananas"] will become "apples,oranges,bananas"

syntax: toString()
*/


var allFood = groceryList.toString();
console.log(allFood);


/** .join
 * .join() concatenates all elements in an array separated by commas or a separator string and retruns a new string; similar output to .toString

syntax: array.join(separator)
    separator: string used to separate adjacent items in the array
 */


var allFood2 = groceryList.join(", ");
console.log(allFood2);



/** .concat
.concat() merges two or more arrays or values. The concatenation will occur in the order the arrays are listed.

syntax: array.concat(value1, value2, value3,...valueN)
    value1...valueN (optional): arrays or values to concatenate into the new array
 */



console.clear();
// concat() with two arrays
var allClothing = shirts.concat(bottoms);
console.log(allClothing);

//concat() with three arrays
var outfitOptions = bottoms.concat(shirts, shoes);
console.log(outfitOptions);

//concat() with multiple arrays and values
var outfitOptions2 = bottoms.concat("sunglasses", shirts, shoes, "Jesus piece");
console.log(outfitOptions2);
console.clear();


/** .splice
.splice() allows items in arrays to be changed by removing or replacing existing elements with new ones and returns as a new array

syntax: array.splice(start, deleteCount, item1, ...itemN)
    start: item index number, variable (that contains either the item index number or an item in the array), or array item where the first change is to be made
    deleteCount (optional): a number that indicates how many items after the start point should be removed; if there isn't a need to delete elements, this number shoudl be 0
    item1: the first element to be added to the array at the indicated start
    ,...itemN (optional): additional elements to be added to the array after item 1

real world use: allows for array editing by removing or replacing items (can replace more than one item)
 */



var favSadeSongs = ["King of Sorrow", "No Ordinary Love", "Smooth Operator"];
console.log(favSadeSongs);

favSadeSongs.splice(0, 0, "Kiss of Life", "Jezebel"); //output: ["Kiss of Life", "Jezebel", "King of Sorrow", "No Ordinary Love", "Smooth Operator"]
console.log(favSadeSongs);

favSadeSongs.splice(1, 1, "Sweetest Taboo");//output: ["Kiss of Life", "Sweetest Taboo", "King of Sorrow", "No Ordinary Love", "Smooth Operator"] (5)
favSadeSongs.push("Solider of Love", "Is it a Crime");
console.log(favSadeSongs);

var n = "Kiss of Life";
favSadeSongs.splice(n, 4, "this got replaced");
console.log(favSadeSongs);
console.clear();



/** .slice
.slice() returns a copied portion of an array in a new array based on the start end parameters provided

syntax: array.slice(start, end)
    start: item index number where the slicing starts
    end (optional): item index number where the slicing ends; this is optional and if you want to slice from the indicated start point the end of the array, this paramater would be omitted
Note: slicing can occur as a console log or be moved into a new array */



console.log(animals);
console.log(animals.slice(4));

var notMammals = animals.slice(8);
console.log(notMammals);

//can you use a string or array value in slice?
console.log(animals.slice("boar"));// no you cannot.

//can also choose to take items from the "middle"
console.log(animals.slice(2, 7));



/** indexOf()
.indexOf() returns the first index (number of item) at which a given element can be found in an array

syntax: array.indexOf(searchElement, fromIndex)
    searchElement: element to locate in the array
    fromIndex: index from where to start the search going through the array (fromIndex point ot end)*/



console.clear();
animals.splice(2, 0, "goose", "platypus", "iguana", "boar");
console.log(animals);
console.log(animals.indexOf("boar"));//found the first occurrence of "boar" at 5
console.log(animals.indexOf("boar", 6));



/** lastIndexOf
.lastIndexOf() returns the index of the last occurence of a given element in an array; returns -1 if the element is not present

syntax: array.lastIndexOf(searchElement, fromIndex)
    searchElement: element to locate in the array
    fromIndex: index from where to start the search going through the array (from end of array to fromIndex point)
*/



console.log(animals.lastIndexOf("iguana"));



/** .map
.map() allows for the modification of an array through an action being iteratated across all items contained in teh array

syntax: array.map(callbackFn, thisArg)
    callbackFun: the function to be executed for each element in the array; this can also be "saved" in a variable
    thisArg (optional): a value to use as this when executing a callbackFn (we will not use this just yet)
Note: There is a more complex way to use this array method that involves functions - we will look into it later
 */



console.clear();
console.log(evens);
console.log(evens.map((x) => x * 2));
//(x + 3) * 3
// => (x + 3) * 3
// (x) => (x + 3) * 3
console.log(evens.map((x) => (x + 3) * 3));

var expression = ((x) => (x + 3) * 3);
console.log(evens.map(expression));



/** .find
.find() returns the first element in the array that satisfies the callbackFn; if no value is present, returns undefined

syntax: array.some(callbackFn, thisArg)
    callbackFn: a function to execute for each element of the array
    thisArg (optional): a value to use as this when executing callbackFn
 */



console.clear();
// using .find with number data types
// commonly used placeholder/variable is element. You will sometimes see this as "element" but most often you will see it as "e". This placeholder/variable is similiar to what we saw in .map where x represented each item/element in the array
/*
There are multiple ways to represent a variable.
in an arry: item = x = element = e

var equalToZero = (x) => x == 0
var equalToZero = (element) => element == 0
var equalToZero = (e) => e == 0
*/

var equalToZero = ((e) => e == 0);
var greaterThanTen = ((e) => e > 10);
var lessThanSix = ((e) => e < 6);

console.log(evens);
console.log(evens.find(equalToZero));
console.log(evens.find(greaterThanTen));
console.log(evens.find(lessThanSix));


/** findIndex
.findIndex() returns the index of the first element in the array that satisfies the callbackFn; if no value is present, returns -1

syntax: array.some(callbackFn, thisArg)
    callbackFn: a function to execute for each element of the array
    thisArg (optional): a value to use as this when executing callbackFn
 */



console.log(evens.findIndex(equalToZero));
console.log(evens.findIndex(greaterThanTen));
console.log(evens.findIndex(lessThanSix));



/*
sort() sorts the elements in the array and returns the array sorted

syntax: array.sort(compareFn)
    compareFn (optional): a function that defines the sort order
    > 0 => sort a after b ex: b, a (this is like sorting from greatest to least)
    < 0 => sort b after a ex: a, b (this is like sorting from least to greatest)
    === 0 => keeps the original order of a and b
*/


var greatestToLeast = ((x) => x > 0);

console.clear();
groceryList.push("chicken", "strawberries", "plums", "peaches", "toaster pasteries");
console.log(groceryList);
console.log(groceryList.sort());
console.log(groceryList.sort(greatestToLeast));

console.clear();
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//if statements
var amHungry = false;

if (amHungry){
    console.log("Get me something to eat!");
}
else {
    console.log("I may not be REAL hungry, but I want a snack anyway.");
};

var age;
if (age >= 21){
    //allow user to access the site
}
else{
    console.log("Thank you, goodbye.");
}

console.clear();

/**
Let's revisit the temp converter.

Last time we only used variables and we had some interesting arithmetic expressions...

(fah -32) * 5/9 => to convert far to celsius
(cel * 9/5) + 32 => to convert celsius to fah
 */

//create variables to hold values
var fah;//hold fahrenheit values
var cel;//hold celsius values
var convertToCelsius = ((fah -32) * 5/9); //when fah is provided, this will give us that degree in celsius
var convertToFarenheit = ((cel * 9/5) + 32);//when cel is provided, this will give us that degree in farenheit

//console.log(evens.map((x) => x * 2));
//console.log(convertToCelsius(55));
//we need to create the instructions for the program to know what to do with fah/cel

convertToCelsius = ((fah) => (fah -32) * 5/9);
console.log(Math.floor(convertToCelsius(55)));//using math.floor rounds down to commonly used number format
//what does this look like when we are converting to farenheit?
convertToFarenheit = ((cel) => (cel * 9/5) + 32);
console.log(Math.floor(convertToFarenheit(37)));

console.clear();
//what if we wanted to create a way for a user to proivde input?
/**
the prompt function
Prompt - allows for a user to provide input that can be used as data in the program

syntax: prompt("placeholder")
    placeholder: hold the string that makes the request the user sees; gives the user directions
 */

//prompt("What is your name?");//this shows up on the user side (aka html) becuase it needs the user to complete a task.

//example of one way to use prompts
var user;
//user = prompt("What is your name?");
console.log(user);
console.log("Hello, " + user + "!");

console.clear();

//fah = prompt("What is the current temperature in farenheit?");
console.log(convertToCelsius(fah));
console.clear();

//if, else if, else with the temp converter
/**
Create a temp converter that does all of the calucations for both fah and cel independently

I only know how to use prompts to get user input, so I will need to do this in parts

step 1: need to know how to convert
am i going C -> F or F -> C?
Step 2: telling the program to use a certain variable to calculate the correct temp.
    if => work for fah to cel conversions only (aka condition 1)
    else if => work for cel to fah conversions only (aka condition 2)
    else => kick back and error message because something wasn't put in right
 */

//step 1: ask how we will convert.
//var conversionDirection = prompt("How do I convert? Enter 'CtoF' for celsius to farenheit or 'FtoC' for farenheit to celsius.")
//the if statement will do FtoC conversions
//the else if statemetn will do CtoF conversions
//the else will kick back and error
// if(conversionDirection == "FtoC"){
//     //then we can convert fah to cel using the varibles created earlier
//     fah = prompt("What is the current temperature?");
//     convertToCelsius = ((fah) => (fah -32) * 5/9);
//     console.log(convertToCelsius(fah));
// }
// else if (conversionDirection == "CtoF"){
//     //we can now convert cel to fah using the variables created earlier
//     cel = prompt("What is the current temperature?");
//     convertToFarenheit = ((cel) => (cel * 9/5) + 32);
//     console.log(convertToFarenheit(cel));
// }
// else{
//     console.log("Please make sure you entered the conversion correctly.");
// }

/*
Create a mile converter that allows the user to input conversion direction and a distance in miles that will be converted to feet or kilometers or kick back an error message

Conversion factors: 
1 mile = 5280 feet
1 mile = 5/8 kilometers
*/

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Tip Calculator
/**
Math expressions for calculator:
decimal for percentage = (tip percentage / 100)
tipAmount = decimal for percentage * foodCost
totalToPay = tipAmount + foodCost

Step 1: determine the amount (percentage to tip) for tipping;
Step 1a: convert this tip amount to the decimal
Step 2: get foodCost amount
Step 3: find the dollar amount for the tip based on the decimal calculated and the foodCost
Step 4: add it all together 
 */

// console.clear();
// var foodCost;
// var tipAmount;
// var totalToPay;

// var tipPercent = prompt("Enter the percent you want to tip your server (do not add the % sign):");

// if (tipPercent > 0){
//     percentDecimal = (tipPercent / 100);
//     console.log(percentDecimal);
//     console.log(typeof percentDecimal);
    
//     foodCost = prompt("What is the cost of your food (be sure to include the cents in your response)?");
//     console.log(foodCost);
//     console.log(typeof foodCost);
    
//     tipAmount = percentDecimal * foodCost;
//     console.log(tipAmount);
//     console.log(typeof tipAmount);
    
//     totalToPay = (tipAmount + parseFloat(foodCost));
//     console.log("The total amount you will pay is: $" + totalToPay.toFixed(2));
//     console.log(typeof totalToPay);
// }
// else {
//     foodCost = prompt("What is the cost of your food (be sure to include the cents in your response)?");
//     console.log("Geez, you're cheap! No tip isn't cool, but the total amount you will pay is: $" + foodCost);
// };

/*parse allows us to change the data type
parseInt = change a string into a whole number (ex. 1, 67, 9872648)
parseFloat = change a string into a decimal (ex. 0.56, 345.93, 96847.07968575)
*/


//Final Code

console.clear();
var foodCost;
var tipAmount;
var totalToPay;

//var tipPercent = prompt("Enter the percent you want to tip your server (do not add the % sign):");

// if (tipPercent > 0){
//     var percentDecimal = (tipPercent / 100);
//     foodCost = prompt("What is the cost of your food (be sure to include the cents in your response)?");
//     tipAmount = percentDecimal * foodCost;
//     totalToPay = (tipAmount + parseFloat(foodCost));
//     console.log("The total amount you will pay is: $" + totalToPay.toFixed(2));
// }
// else {
//     foodCost = prompt("What is the cost of your food (be sure to include the cents in your response)?");
//     console.log("Geez, you're cheap! No tip isn't cool, but the total amount you will pay is: $" + foodCost);
// };
console.clear();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//for loop: completes task through the entire dataset until the condition is false

for (let i = 5; i <=100; i+=10){
    console.log(i);
}

var coders = ["Jared", "Victoria", "Jordan", "Emmanuel", "Robert", "Derrick", "Mr. Perry"];
for (var i = 0; i < coders.length; i++){
    var message = coders[i] + " usually loves coding, but today, possibly wants a break.";
    console.log(message);
}

console.clear();

// var i = 0; 
// while (i <= 10){
//     console.log(i);
//     i++;
// };

// while (i<=10){
//     i = 1;
//     console.log(i);
//     i++;
// };

//foreach loops - used only with arrays
coders.forEach(coder => console.log(coder + " loves coding!"));

coders.forEach(coder => {console.log(coder + " maybe loves coding")})

console.clear();

// function addTwoNumbers(){
//     console.log(5 + 7);
// };

// addTwoNumbers();
// console.log("chicken");
// addTwoNumbers();

// function addTwoNumbers(num){
//     console.log(num + 7);
// };

// addTwoNumbers(5);
// addTwoNumbers(-22);
// addTwoNumbers(10);

// function addTwoNumbers(a, b){
//     console.log(a + b);
// };
// addTwoNumbers(5, 9);
// addTwoNumbers(8, 8);
// addTwoNumbers(86748, -833728);

// function addTwoNumbers(a, b){
//     var sum = a + b;
//     console.log(sum);
//     return sum;
// };

// addTwoNumbers(8, -10);

function addTwoNumbers(a=1, b=2){
    var sum = a + b;
    console.log(sum);
    return sum;
}

addTwoNumbers();
addTwoNumbers(10);
addTwoNumbers(12,10);

console.clear();

//Objects
//bracket notation
var person = {
    fName: "Dwayne",
    lName: "Johson",
    alias: "The Rock",
    "occupation": "President of the United States", 
    "other jobs": ["wrestler", "actor", "singer"],
    age: 51,
    isStrong: true
};

console.log(person.alias);
console.log(person.age);
console.log(person.isStrong);
console.log(person["other jobs"]);//this must be used when calling for an object item that is stored in an array
console.log(person["other jobs"][1]);

var work = "occupation";
//console.log(person.work);
console.log(work);
console.log(person[work]);
console.log(person["occupation"]);
var occ = person["occupation"];
console.log(occ);


//to update a value in an object, follow the same process for updating a variable
console.log(person.age);
person.age = 52;
console.log(person.age);

//to add a new value in an object call the object then add the new key folowed by the value

console.log(person);
person.finishingMove = "The People's Elbow";
console.log(person);

//to delete a value in an object use the command delete followed by the object.key
delete person.finishingMove;
console.log(person);

person.quote = function(){
    var message = "Can you SMELL what The Rock...is cooking?";
    console.log(message);
    return message;
}

console.log(person);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.clear();
/*Create a temp converter that does all of the calucations for both fah and cel independently

I only know how to use prompts to get user input, so I will need to do this in parts

step 1: need to know how to convert
am i going C -> F or F -> C?
Step 2: telling the program to use a certain variable to calculate the correct temp.
    if => work for fah to cel conversions only (aka condition 1)
    else if => work for cel to fah conversions only (aka condition 2)
    else => kick back and error message because something wasn't put in right
 */

// //step 1: ask how we will convert.
// var conversionDirection = prompt("How do I convert? Enter 'CtoF' for celsius to farenheit or 'FtoC' for farenheit to celsius.")
// // the if statement will do FtoC conversions
// // the else if statemetn will do CtoF conversions
// // the else will kick back and error
// if(conversionDirection == "FtoC"){
//     //then we can convert fah to cel using the varibles created earlier
//     fah = prompt("What is the current temperature?");
//     convertToCelsius = ((fah) => (fah -32) * 5/9);
//     console.log(convertToCelsius(fah));
// }
// else if (conversionDirection == "CtoF"){
//     //we can now convert cel to fah using the variables created earlier
//     cel = prompt("What is the current temperature?");
//     convertToFarenheit = ((cel) => (cel * 9/5) + 32);
//     console.log(convertToFarenheit(cel));
// }
// else{
//     console.log("Please make sure you entered the conversion correctly.");
// }


//for the update, use functions inside of the else/if to do the calculations
// var conversionDirection = prompt("How do I convert? Enter 'CtoF' for celsius to farenheit or 'FtoC' for farenheit to celsius.");
// var cel;
// var fah;

// function farToCel(){
//     fah = prompt("What is the current temperature?");
//     convertToCelsius = ((fah) => (fah -32) * 5/9);
//     console.log(convertToCelsius(fah));
// };

// function celToFar(){
//     cel = prompt("What is the current temperature?");
//     convertToFarenheit = ((cel) => (cel * 9/5) + 32);
//     console.log(convertToFarenheit(cel));
// };

// if(conversionDirection == "FtoC"){
//     //instead of typing in the steps, just drop the function
//     farToCel();
// }
// else if (conversionDirection == "CtoF"){
//     //instead of typing in the steps, just drop the function
//     celToFar();
// }
// else{
//     console.log("Please make sure you entered the conversion correctly.");
// }

console.clear();

// ---------------------------------------------------------------

//class = it is a fancier version of an object where we create a protoype that we can later use to give values to a different object with similar properties

/*
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
//functions in classes do not need the "function" keyword to work
    displayProduct(){
        console.log(`Item: ${this.name}`);
        console.log(`Cost: ${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (salesTax * this.price);
    }
}
const salesTax = 0.07;

const product1 = new Product("T-shirt", 25.99);
const product2 = new Product("Jeans", 87.88);
const product3 = new Product("sunglasses", 1498.00);

product3.displayProduct();

const total = product3.calculateTotal(salesTax);
console.log(`Total to pay (with tax): $${total.toFixed(2)}`);
*/

//--------------------------

//character building for a game using classes

//Create six characters by using classes to better structure our objects. The characters can be superheros, celebrities, family members, etc. If you choose you can use what you created for the hero generator, if you want to create new characters, that's cool too.
/*
For each "character" you will have a property for the following: 
-name, 
-short description (a few words or a sentence),
-health points, 
-attack (if they were fighting other characters, how would they cause them to lose health points- there should be 3 of these), 
-defense (if they wanted to protect themselves in a fight, what would be their approach -there needs to be 3 of these), 
** note for each attack and defense these needs to be an associated point value, 
-** OPTIONAL: kryptonite (what causes them to lose a lot of health points quickly-there needs to be 1 of these)
-group (what category would they be in if this was part of a universe)
-catch phrase they do that show up in the console
*/

//example will be from Krystal's R&B Fighting Universe

//attack/defense points: Let's say for each round of battle the maximum impact your attack/defense can have is 50 points. Let's also say that each character starts with 100 points (these would be health points)
//for each attack/defense you need to have a value so you know how much to decrease on an opponent (this means the value will be a negative number) or how much to add back to your health (this would be for defenses and would be a positive number)

class RhythmAndBattleCha{
    constructor(charaName, description,group, health, attack1, attackPoint1, attack2, attackPoint2, attack3, attackPoint3, defense1, defensePoint1, defense2, defensePoint2, defense3, defensePoint3, catchPhrase){
        this.charaName = charaName;
        this.description = description;
        this.group = group; 
        this.health = health;
        this.attack1 = attack1;
        this.attackPoint1 = attackPoint1;
        this.attack2 = attack2;
        this.attackPoint2 = attackPoint2;
        this.attack3 = attack3;
        this.attackPoint3 = attackPoint3;
        this.defense1 = defense1;
        this.defensePoint1 = defensePoint1;
        this.defense2 = defense2;
        this.defensePoint2 = defensePoint2;
        this.defense3 = defense3;
        this.defensePoint3 = defensePoint3;
        this.catchPhrase = catchPhrase;
    }
    yellPhrase(){
        console.log(`The character, ${this.charaName}, yells out to their opponent ${this.catchPhrase}`)
    } 
}

//to create a new object based on the created class, there are two methods, (1)using the "new" keyword or (2)just adding based on what is in the listed arguments

//Let's use method 1 for adding in James Brown

const James = new RhythmAndBattleCha();
//in order to add new object values, you will need to create the template for the object using an existing class
James.charaName = "James Brown";
James.description = "The hardest working man in show business.";
James.attack1 = "kick slide";
James.attackPoint1 = -35;

James.yellPhrase();
console.log(James.attack1);

//Let's use method 2 for adding in Beyonce
const Beyonce = new RhythmAndBattleCha("Beyonce Knowles-Carter", "The greatest living entertainer alive", "superstar", 120, "The Hold Up", -30, "The Uh-Oh", -24, "Crazy Right Now", -48, "Ring on It", 25, "Quick Feet", 32, "Whitney-like run", 40, "I'm a Texas-Bamma!");

Beyonce.yellPhrase();


//----------------------------


class Animal{
    constructor(){
        name: this.name;
        numberOfLimbs: this.limbs;
    }
    animalLimbs(){
        console.log(`this animal has ${this.limbs} limbs`)
    }
}

const bear = new Animal();
bear.name = "Beary";
bear.limbs = 4;

bear.animalLimbs();


