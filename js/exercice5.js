

//1-Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
//an item price
//and an array representing the amount of change in your pocket.
function currencyEnough(itemPrice, amountOfChange) {

    //2-In the function, determine whether or not you can afford the item.
    //If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
    //If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

    return moneyCalculation(amountOfChange) >= itemPrice;
}

/**
 * Calcul et retourne le montant que l'user a en poche
 * @param amountOfChange 
 */
function moneyCalculation(amountOfChange) {
    const quarters = 0.25;
    const dimes = 0.10;
    const nickel = 0.05;
    const penny = 0.01;

    let amount = 0;
    for (let index = 0; index < amountOfChange.length; index++) {
        if (index == 0) {
            amount += amountOfChange[index] * quarters;
        }
        if (index == 1) {
            amount += amountOfChange[index] * dimes;
        }
        if (index == 2) {
            amount += amountOfChange[index] * nickel;
        }
        if (index == 3) {
            amount += amountOfChange[index] * penny;
        }
    }

    return amount;
}

//TEST
console.log(currencyEnough(14.11, [2,100,0,0]));;
console.log(currencyEnough(0.75, [0,0,20,5]));;