document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('tipForm');
  var billAmountInput = document.getElementById('billAmount');
  var tipPercentageInput = document.getElementById('tipPercentage');
  var tipAmountInput = document.getElementById('tipAmount');
  var totalAmountInput = document.getElementById('totalAmount');

  form.addEventListener('input', function() {
    var billAmount = parseFloat(billAmountInput.value);
    var tipPercentage = parseFloat(tipPercentageInput.value);
    
    if (isNaN(billAmount)) {
      tipAmountInput.value = '';
      totalAmountInput.value = '';
      return;
    }
    
    var tipAmount = billAmount * (tipPercentage / 100);
    var totalAmount = billAmount + tipAmount;
    
    tipAmountInput.value = tipAmount.toFixed(2);
    totalAmountInput.value = totalAmount.toFixed(2);
  });
});