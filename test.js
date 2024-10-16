// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("1 USD should be 146.2616822 JPY", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const Yens = fromDollarToYen(3);

    const expected = 3.5/1.07 * 156.5;
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBeCloseTo(511.91588785, 2);
})

test("1 JPY should be 0.0055614973 GBP", function() {

    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(1000);

    const expected = 1000 * 0.0055614973
    
     expect(fromYenToPound(1000)).toBeCloseTo(5.5614973, 2);
})