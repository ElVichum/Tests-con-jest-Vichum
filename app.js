// This is my function that sums two numbers
const sum = (num1,num2) => {
    return num1 + num2
}

// Just a console log for ourselves
console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(euro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = euro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = (dollar) => {
     let valueInEuro = dollar / 1.07;
     let valueInYen = valueInEuro * 156.5;

     return valueInYen;
}

const fromYenToPound = (yen) => {
    let valueInEuro = yen / 156.5;
    let valueInPound = valueInEuro * 0.87;

    return valueInPound;
}

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };