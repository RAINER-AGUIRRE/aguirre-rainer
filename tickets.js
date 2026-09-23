function isValidQuantity(quantity) {
    return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice, premium = false) {
    let total = quantity * basePrice;

    if (premium) {
        total = total * 1.50;
    }

    if (quantity >= 5) {
        total = total * 0.90;
    }

    total = total - 10;

    return Math.floor(total);
}

module.exports = { isValidQuantity, calculateTicketPrice };