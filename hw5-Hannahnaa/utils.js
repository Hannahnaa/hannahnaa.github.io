/**
 * Gets the amount if it exists, otherwise returns null
 * @returns {number | null} the amount as a number, or null if empty
 */
function getAmount() {
    const val = document.getElementById("amount").value;
    if (val === '') {
        return null;
    } else {
        return parseFloat(val);
    }
}

/**
 * Gets the from unit if it is specified, otherwise returns null
 * @returns {string | null} the unit as a string, or null if unspecified
 */
function getFromUnit() {
    const val = document.getElementById("op-unit-from").value;
    if (val === 'Please specify a unit') {
        return null;
    } else {
        return val;
    }
}

/**
 * Gets the to unit if it is specified, otherwise returns null
 * @returns {string | null} the unit as a string, or null if unspecified
 */
function getToUnit() {
    const val = document.getElementById("op-unit-to").value;
    if (val === 'Please specify a unit') {
        return null;
    } else {
        return val;
    }
}
