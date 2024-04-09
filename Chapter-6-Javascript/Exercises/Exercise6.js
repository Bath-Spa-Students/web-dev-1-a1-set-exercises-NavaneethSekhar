document.addEventListener('DOMContentLoaded', function() {
    const costInput = document.getElementById('cost');
    const litersInput = document.getElementById('liters');
    const calculateBtn = document.getElementById('calculateBtn');
    const totalCostDisplay = document.getElementById('totalCost');

    calculateBtn.addEventListener('click', function() {
        const cost = parseFloat(costInput.value);
        const liters = parseFloat(litersInput.value);
        const totalCost = cost * liters;
        totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    });
});