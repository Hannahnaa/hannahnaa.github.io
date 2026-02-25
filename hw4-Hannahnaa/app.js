
function checkout() {
    const numDrinks = getNumDrinks();
    const pricePerDrink = getPricePerDrink();
    const tipPercent = getTip();
    const hasLoyalty = getLoyaltyStatus();

    if (
    numDrinks === null ||
    pricePerDrink === null ||
    tipPercent === null ||
    hasLoyalty === null
) {
    alert("Please fill out all fields before continuing.");
    return;
}

let subtotal = numDrinks * pricePerDrink;

let discountApplied = false;
if (subtotal >= 20) {
    subtotal = subtotal * 0.9;
    discountApplied = true; 
}

let tipAmount = subtotal * (tipPercent / 100);

let total = subtotal + tipAmount;

let message = "Your total is $" + total.toFixed(2) + ".";

if (discountApplied) {
    message += " Discount applied!";
}

if (hasLoyalty === "Yes") {
    message += " You earned a free pastry!";
}

alert(message);
}
