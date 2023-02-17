// step 1: add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function() {
    // step 2: get the deposit amount from the deposit input field
    const depositField = document.getElementById("deposit-field");
    const newDepositAmount = parseFloat(depositField.value);

    // step 3: get the current deposit total amount
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);

    // step 4:
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step 7: clear the deposit field
    depositField.value = "";
});