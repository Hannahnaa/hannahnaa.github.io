# CS272-S26 HW4

In this assignment, you will implement a "Coffee Shop Checkout". The user will fill out how many drinks they want, the price per drink, select a tip percentage, and indicate whether they have loyalty points. Upon clicking "Checkout" the app will calculate the total and let the user know if they earned any rewards!

## Requirements

Upon clicking the "Checkout" button, if any field is missing (i.e., any of the helper functions return `null`), you should display an `alert` that says "Please fill out all fields before continuing."

Otherwise, the checkout should proceed! Each input can be read using the helper functions defined in `utils.js`, as is done in the starter code:

- `getNumDrinks()` — returns the number of drinks, or `null` if empty.
- `getPricePerDrink()` — returns the price per drink as a number, or `null` if empty.
- `getTip()` — returns the selected tip percentage as a number (`10`, `15`, `20`, or `0`), or `null` if no option is selected.
- `getLoyaltyStatus()` — returns `"Yes"` if "Yes" is selected, `"No"` if "No" is selected, or `null` if nothing is selected.

To calculate the total:

1. **Subtotal**: Multiply the number of drinks by the price per drink.
2. **Discount**: If the subtotal is **$20 or more**, a 10% discount is applied to the subtotal.
3. **Tip**: The tip is calculated on the subtotal **after** the discount has been applied. The tip percentage is given as a whole number (e.g., `15` means 15%).
4. **Total**: The total is the discounted subtotal plus the tip.

You should then build a result message and display it in a single `alert`:

- Always start the message with `"Your total is $X.XX."` where `X.XX` is the total rounded to two decimal places.
- If a discount was applied, append `" Discount applied!"` to the message.
- If the customer has loyalty points (i.e., `getLoyaltyStatus()` returned `"Yes"`), append `" You earned a free pastry!"` to the message.

## Special Notes

1. You can round to two decimal places by using the `toFixed` function. For example, if `x` holds the value `11.5`, `x.toFixed(2)` will return `"11.50"`.

2. The tip percentage is returned as a whole number. For example, `15` means 15%, so you should divide by 100 before multiplying.

3. You may assume that the number of drinks and price per drink will either be `null` or a valid value; you do not need to consider negative numbers or other invalid input. The tip will either be `null` or one of `0`, `10`, `15`, `20`. The loyalty status will be `null`, `"Yes"`, or `"No"`.

## Scenarios

These scenarios should help you test your code! Please test your code thoroughly; these are just examples to help you in your testing.

### Scenario 1

| Field | Value |
| --- | --- |
| Number of Drinks | 2 |
| Price Per Drink | 5 |
| Tip Percentage | 15% |
| Has Loyalty Points? | No |

> Your total is $11.50.

Subtotal is $10.00, which is under $20 so no discount. Tip is 15% of $10.00 = $1.50. Total = $11.50. No loyalty, so no free pastry.

### Scenario 2

| Field | Value |
| --- | --- |
| Number of Drinks | 4 |
| Price Per Drink | 5 |
| Tip Percentage | 10% |
| Has Loyalty Points? | Yes |

> Your total is $19.80. Discount applied! You earned a free pastry!

Subtotal is $20.00, so a 10% discount is applied: $20.00 - $2.00 = $18.00. Tip is 10% of $18.00 = $1.80. Total = $19.80. Has loyalty, so a free pastry is earned.

### Scenario 3

| Field | Value |
| --- | --- |
| Number of Drinks | 3 |
| Price Per Drink | 4.5 |
| Tip Percentage | 20% |
| Has Loyalty Points? | Yes |

> Your total is $14.40. You earned a free pastry!

Subtotal is $13.50, which is under $20 so no discount. Tip is 20% of $13.50 = $2.70. Total = $16.20. Has loyalty, so a free pastry is earned.

### Scenario 4

| Field | Value |
| --- | --- |
| Number of Drinks | 5 |
| Price Per Drink | 6.99 |
| Tip Percentage | No Tip |
| Has Loyalty Points? | No |

> Your total is $31.4. Discount applied!

Subtotal is $34.95, so a 10% discount is applied: $34.95 - $3.495 = $31.455. Tip is 0% of $31.455 = $0.00. Total = $31.45. No loyalty, so no free pastry.

Due to floating point number representation, `toFixed(2)` rounds `31.455` to `31.45` despite what your intuition may say! [Learn more here.](https://www.youtube.com/watch?v=PZRI1IfStY0) We won't get picky over pennies, though.

## Submission

When you are done, be sure to add, commit, and push your code! Your Canvas submission will simply be a URL to your GitHub repository.
