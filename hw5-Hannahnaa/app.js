
/**
 * Gets the number of fl oz in the given unit. For example, if
 * `unit` is "Cup", the return value would be 8. If `unit` is "Quart",
 * the return value would be 32. If the `unit` is `Fl Oz`, the return
 * value would be 1.
 * 
 * This function should be implemented for all possible units, including...
 * "Fl Oz", "Cup", "Pint", "Quart", and "Gallon".
 * If the unit does not match one of these strings, the return should be null.
 * 
 * @param {string} unit the unit, e.g. "Fl Oz", "Cup", etc.
 * @returns {number | null} the number of fl oz or null if invalid unit
 */
function getUnitInFlOz(unit) {
    
    // TODO: Return the actual number of fl oz in `unit`!
    return 0;
}

/**
 * This function is called whenever the user presses the "Convert!" button.
 * It should alert the user if any of the fields are null or if the amount is negative.
 * Otherwise, it should call getResult and alert the user of the result.
 * e.g. "2 Pint is equal to 4 Cup"
 */
function convert() {
    // TODO: Check if the variables have values, pass them to getResult, and alert the user of the conversion!
    let amn = getAmount();
    let fromUnit = getFromUnit();
    let toUnit = getToUnit();

    alert("I should validate the form and do the conversion!");
}

/**
 * This function should take the amount, fromUnit, and toUnit, and
 * return the result of the conversion. You should use the
 * getUnitInFlOz function in your calculation.
 * 
 * e.g. arguments of 2, "Pint", "Cup" should return 4
 * 
 * @param {number} amount The amount to convert
 * @param {string} fromUnit The unit we are coming from
 * @param {string} toUnit The unit we are going to
 * @returns {number} the resulting amount, in toUnit units
 */
function getResult(amount, fromUnit, toUnit) {

    // TODO: Return the actual result!
    return 0;
}
