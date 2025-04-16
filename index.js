const billInput = document.getElementById('bill');
const tipButtons = document.querySelectorAll('button');
const customTipInput = document.getElementById('custom-tip');
const peopleInput = document.getElementById('people');
const tipAmountDisplay = document.getElementById('tip-amount');
const totalAmountDisplay = document.getElementById('total-amount');
const resetButton = document.getElementById('reset-btn');

let tipPercent = 0;

document.querySelectorAll('input[type="number"]').forEach((input) => {
    input.addEventListener('keydown', function (e) {
      if (e.key === '-' || e.key === 'Minus') {
        e.preventDefault();
      }
    });
  });

function calculateTip() {
  const bill = parseFloat(billInput.value) || 0;
  const people = parseInt(peopleInput.value) || 1; 

  
  if (bill === 0 || people === 0) {
    tipAmountDisplay.textContent = "$0.00";
    totalAmountDisplay.textContent = "$0.00";
    return;
  }

  
  const tipAmount = (bill * tipPercent) / 100 / people;
  const totalPerPerson = (bill + (bill * tipPercent) / 100) / people;

  tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
  totalAmountDisplay.textContent = `$${totalPerPerson.toFixed(2)}`;
}


tipButtons.forEach((btn) => {
  if (btn.textContent.includes('%')) {
    btn.addEventListener('click', () => {
      tipPercent = parseInt(btn.textContent);
      customTipInput.value = ''; 
      calculateTip(); 
    });
  }
});


customTipInput.addEventListener('input', () => {
  tipPercent = parseFloat(customTipInput.value) || 0;
  calculateTip();
});


billInput.addEventListener('input', () => {
  preventNegativeInput(billInput);
  calculateTip();
});
peopleInput.addEventListener('input', () => {
  preventNegativeInput(peopleInput);
  calculateTip();
});

resetButton.addEventListener('click', () => {
  billInput.value = '';
  peopleInput.value = '';
  customTipInput.value = '';
  tipAmountDisplay.textContent = '$0.00';
  totalAmountDisplay.textContent = '$0.00';
  tipPercent = 0;
});
