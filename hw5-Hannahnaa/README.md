# CS272-S26 HW5

In this HW, you will write functions to perform unit conversions for volumes! 

## Instructions

### 1. `getUnitInFlOz`

Implement the `getUnitInFlOz` function such that anytime it is called, it will return the number of fl oz in the given unit. That is...

 - If `unit` is "Fl Oz" → returns `1`
 - If `unit` is "Cup" → returns `8`
 - If `unit` is "Pint" → returns `16`
 - If `unit` is "Quart" → returns `32`
 - If `unit` is "Gallon" → returns `128`

If the unit does not match one of these strings, the return should be `null`. Remember, since this is a function you can test this right in your browser's console! For example, once implemented, running `getUnitInFlOz("Quart")` should return `32`!

This is a helper function that will be used in Step 3.

### 2. `convert`

Implement the `convert` function such that anytime it is called, it will collect the amount, from unit, and to unit (this is done for you!). If any of these are `null`, you should `alert` the user to "Please complete all fields before continuing!" Furthermore, if the "amount" is negative, you should `alert` the user to "Please enter a positive amount!"

Otherwise, you should call the `getResult` function, passing along these 3 pieces of data, and `alert` the user of the result of the calculation, e.g. "2 Pint is equal to 4 Cup". You do *not* need to round any numbers.

You still need to implement `getResult` which is the next and final step.

### 3. `getResult`

In `getResult`, you will perform the conversion. To make your calculation simple, I would ask that you use the `getUnitInFlOz` function. This function takes a unit and returns the number of fl oz in that unit.

Remember, to convert units we simply need to convert to a common unit (like fl oz) and do the math!

```
2 pint     16 fl oz   1 cup
        *  -------- * -------- = 4 cup
           1 pint     8 fl oz
           
```

That is, to convert 2 pints to a number of cups, we would simply multiply the number of pints by the number of fluid ounces in a pint, and divide by the number of fluid ounces in a cup.

## Scenarios

These scenarios should help you test your code! Please test your code thoroughly; these are just examples to help you in your testing.

### Scenario 1

Given 2 pints and converting to cups, the `alert` should be...

"2 Pint is equal to 4 Cup"

### Scenario 2

Given 4 cups and converting to gallons, the `alert` should be...

"4 Cup is equal to 0.25 Gallon"

### Scenario 3

Given 20.5 fl oz and converting to pints, the `alert` should be...

"20.5 Fl Oz is equal to 1.28125 Pint"

You may have some rounding error; that is okay!

### Scenario 4

Given that some of the form fields are not filled out, the `alert` should be...

"Please complete all fields before continuing!"

### Scenario 5

Given that all of the form fields are filled out, but the amount is negative, the `alert` should be...

"Please enter a positive amount!"
