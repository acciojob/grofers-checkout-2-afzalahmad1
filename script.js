//your code here
function calculateTotal() {
  const prices = document.querySelectorAll('[data-ns-test="price"]');
  let total = 0;
  prices.forEach(price => {
    const priceValue = parseFloat(price.textContent.replace('$', ''));
    if (!isNaN(priceValue)) {
      total += priceValue;
    }
  });
  const grandTotal = document.querySelector('[data-ns-test="grandTotal"]');
  grandTotal.textContent = '$' + total.toFixed(2);
}

calculateTotal();

// Listen for changes to the prices and recalculate the total
const prices = document.querySelectorAll('[data-ns-test="price"]');
prices.forEach(price => {
  const observer = new MutationObserver(mutations => {
    calculateTotal();
  });
  observer.observe(price, { characterData: true, subtree: true });
});
