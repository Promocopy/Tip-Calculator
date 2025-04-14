const billInput = document.querySelector('input[placeholder="0.00"]');
const tipButtons = document.querySelectorAll('button');
const customTipInput = document.querySelector('input[placeholder="Custom %"]');
const peopleInput = document.querySelector('input[placeholder="0"]');
const tipAmountDisplay = document.querySelectorAll('span')[0];
const totalAmountDisplay = document.querySelectorAll('span')[1];
const resetButton = document.querySelector('button:last-child');

let tipPercent = 0;

function calculateTip() {
  const bill = parseFloat(billInput.value);
  const people = parseInt(peopleInput.value);

  if (!bill || !people || people === 0) {
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

billInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);

resetButton.addEventListener('click', () => {
  billInput.value = '';
  peopleInput.value = '';
  customTipInput.value = '';
  tipAmountDisplay.textContent = '$0.00';
  totalAmountDisplay.textContent = '$0.00';
  tipPercent = 0;
}); 