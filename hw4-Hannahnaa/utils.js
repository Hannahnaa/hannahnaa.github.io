/**
 * Gets the number of drinks from the input field.
 * @returns The number if it exists, else null
 */
function getNumDrinks() {
    const inp = document.getElementById("num-drinks").value.trim();
    if (inp === '') {
        return null;
    } else {
        let numDrinks = Math.round(parseFloat(inp));
        if (numDrinks < 0) {
            return 0;
        } else {
            return numDrinks;
        }
    }
}

/**
 * Gets the price per drink from the input field.
 * @returns The number if it exists, else null
 */
function getPricePerDrink() {
    const inp = document.getElementById("price-per-drink").value.trim();
    if (inp === '') {
        return null;
    } else {
        let price = parseFloat(inp);
        if (price < 0) {
            return 0;
        } else {
            return price;
        }
    }
}

/**
 * Gets the selected tip percentage from the radio buttons.
 * @returns The tip percentage (10, 15, 20, or 0) if selected, else null
 */
function getTip() {
    const checked = document.querySelector('input[name="tip-percent"]:checked');
    if (checked) {
        return parseInt(checked.value);
    } else {
        return null;
    }
}

/**
 * Gets the loyalty status from the radio buttons.
 * @returns "Yes" if "Yes" is selected, "No" if "No" is selected, or null if nothing is selected
 */
function getLoyaltyStatus() {
    const checked = document.querySelector('input[name="loyalty-status"]:checked');
    if (checked) {
        return checked.value === "yes" ? "Yes" : "No";
    } else {
        return null;
    }
}
