// Function to convert a value from a given base to decimal
function convertToDecimal(base, value) {
    return parseInt(value, base);
}

// Function to calculate the constant term 'c' from the decoded roots
function calculateConstantTerm(roots) {
    return roots.reduce((acc, root) => acc * root, 1); // Product of roots
}

// Main function to read input and execute the program logic
function main() {
    // Sample input in JSON format
    const input = `
    {
        "keys": {
            "n": 4,
            "k": 3
        },
        "1": {
            "base": "10",
            "value": "4"
        },
        "2": {
            "base": "2",
            "value": "111"
        },
        "3": {
            "base": "10",
            "value": "12"
        },
        "6": {
            "base": "4",
            "value": "213"
        }
    }`;

    const data = JSON.parse(input);
    const roots = [];

    // Iterate over the keys to decode the values
    for (const key in data) {
        if (key !== "keys") { // Ignore the "keys" entry
            const base = parseInt(data[key].base);
            const value = data[key].value;
            const decimalValue = convertToDecimal(base, value);
            roots.push(decimalValue); // Add the decoded root to the array
        }
    }

    // Calculate the constant term 'c'
    const c = calculateConstantTerm(roots);
    
    // Print the result
    console.log(`The constant term c is: ${c}`);
}

// Run the main function
main();
