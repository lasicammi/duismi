// Example configuration object
let config = {
    bins: [0, 10, 20, 30, 40]  // Bins defining intervals
};

// Function or process using `bins` to infer domain
function processData(data, domain = [0, 40]) {
    // Process data within the domain inferred from `bins`
    // Here, `domain` could default to [0, 40], but it can also be omitted
    // because it's implied by the range covered in `bins`.
}

// Usage
processData(someData, [0, 40]);  // Explicit domain specified
processData(someData);  // Domain inferred implicitly from `bins`
