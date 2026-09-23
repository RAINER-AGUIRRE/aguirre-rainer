function isValidQuantity(quantity) {
  return quantity > 0 && quantity <= 20;
}

function calculateTicketPrice(quantity, basePrice) {
  const total = quantity * basePrice;

  if (quantity >= 5) {
    return Math.floor(total * 0.90);
  }

  return Math.floor(total);
}

module.exports = { isValidQuantity, calculateTicketPrice };