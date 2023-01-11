/*
@description : Shopping List
* @param const stock
* @param const prices
* @param shoppingList
*/

//1- Add the stock and prices objects to your js file.
const stock = {
   "banana": 6,
   "apple": 0,
   "pear": 12,
   "orange": 32,
   "blueberry": 1
}

const prices = {
   "banana": 4,
   "apple": 2,
   "pear": 1,
   "orange": 1.5,
   "blueberry": 10
}

//2-Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. 
//It means that you have 1 banana, 1 orange and 1 apple in your cart.
let shoppingList = ["banana", "orange", "apple"]

//3- Create a function called myBill() that takes no parameters.
/**
* return the total price of our shoppingList
*/
function myBill() {
   //4-The function should return the total price of your shoppingList. 
   //In order to do this you must follow these rules:
   //The item must be in stock. (Hint : check out if .. in)
   //If the item is in stock find out the price in the prices object.

   let totalPrice = 0;
   for (const shoppingListObject of shoppingList) {
       if (checkStock(shoppingListObject)) {
           totalPrice += getPrice(shoppingListObject)
       }
   }
   return totalPrice;
}

/*
*get article in stocke

* @returns true if article is a stock et false sinon
*/
function checkStock(article) {
   for (const key in stock) {
       if (key == article && stock[key] != 0) {
           //6-Bonus: If the item is in stock, decrease the item’s stock by 1
           stock[key]--;
           //console.log("nouveau stock: " + stock[key]);

           return true;
       }
   }
   return false;
}

/**
* 
*
* @returns le prix de l'article
*/
function getPrice(article) {
   for (const key in prices) {
       if (key == article) {
           return prices[key];
       }
   }
   return 0;
}

//5-Call the myBill() function.
console.log("le prix total est  " + myBill());
