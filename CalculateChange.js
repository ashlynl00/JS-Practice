function calculateChange(price, amountPaid) {
    let change = amountPaid - price;
    return change;
}

console.log(calculateChange(2, 30));
