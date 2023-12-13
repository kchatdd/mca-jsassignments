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

