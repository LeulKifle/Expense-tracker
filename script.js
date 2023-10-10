// Get the expense form element
const expenseForm = document.getElementById('expenseForm');

// Add event listener to the form submit event
expenseForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values from the form
  const foodExpense = parseFloat(document.getElementById('food').value);
  const powerExpense = parseFloat(document.getElementById('power').value);
  const rentExpense = parseFloat(document.getElementById('rent').value);

  // Calculate the total expense
  const totalExpense = foodExpense + powerExpense + rentExpense;

  // Calculate the contribution per person
  const contributionPerPerson = totalExpense / 3;

  // Display the contribution per person
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `Contribution per person: $${contributionPerPerson.toFixed(2)}`;
});