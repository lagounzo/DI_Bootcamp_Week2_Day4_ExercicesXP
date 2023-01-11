//1-Define a function called hotelCost().
//It should ask the user for the number of nights they would like to stay in the hotel.
//If the user doesn’t answer or if the answer is not a number, ask again.
//The hotel costs $140 per night. The function should return the total price of the hotel.

/**
 * Demande à l'user le nombre de nuits qu'il souhaite passer et retourne 
 * le coût correspondant
 * @returns numberNight * prix
 */
function hotelCost() {
    let numbersNight;

    do {
        numbersNight = prompt("Combien de nuits souhaitez-vous rester ?");
    } while (numbersNight == null || isNaN(numbersNight));

    return numbersNight * 140;
}
//console.log(hotelCost());

//2-Define a function called planeRideCost().
//It should ask the user for their destination.
//If the user doesn’t answer or if the answer is not a string, ask again.
//The function should return a different price depending on the location.
//“London”: 183$
//“Paris” : 220$
//All other destination : 300$

/**
 * Demande à l'user sa destination et retourne le prix correspondant
 * @returns montant destination
 */
function planeRideCost() {
    let destinationAmount;
    do {
        destinationAmount = prompt("Quelle est votre destination ?")
    } while (destinationAmount == null || !isNaN(destinationAmount));

    if (destinationAmount.toLowerCase() == 'london') {
        return 183;
    } else if (destinationAmount.toLowerCase() == 'paris') {
        return 220;
    } else {
        return 300;
    }
}
//console.log(planeRideCost());

//3-Define a function called rentalCarCost().
//It should ask the user for the number of days they would like to rent the car.
//If the user doesn’t answer or if the answer is not a number, ask again.
//Calculate the cost to rent the car. The car costs $40 everyday.
//If the user rents a car for more than 10 days, they get a 5% discount.
//The function should return the total price of the car rental.

/**
 * Calcul le montant de location d'un véhicule en fonction du nombre de jour
 * @returns Le montant de location 
 */
function rentalCarCost() {
    let locationNumberDay;
    do {
        locationNumberDay = prompt("Pour combien de jours souhaitez-vous louer le véhicule ?")
    } while (locationNumberDay == null || isNaN(locationNumberDay));

    return parseInt(locationNumberDay) > 10 ? (locationNumberDay * 40) - (locationNumberDay * 40 * 0.05) : locationNumberDay * 40;
}
//console.log(rentalCarCost());

//4-Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
//Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
//Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
/**
 * Formate le texte à afficher en fonction des valeurs saisies pour 
 * la destination, l'hotel et le véhicule à louer
 */
function totalVacationCost() {
    let destinationCost = planeRideCost();
    if (typeof (destinationCost) != 'undefined') {
        let hotalCost = hotelCost();

        if (typeof (hotalCost) != 'undefined') {
            let vehicleCost = rentalCarCost();

            if (typeof (vehicleCost) != 'undefined') {
                alert("Le véhicule coûte: $" + vehicleCost + ", l'hôtel coûte: $" + hotalCost + ", le ticket d'avion coûte: $" + destinationCost);
            }
        }
    }
}

//5-Call the function totalVacationCost()
totalVacationCost();