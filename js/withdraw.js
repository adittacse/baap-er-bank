// step 1 : add event listener to the withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function() {
    // step 2: get the deposit amount from the withdraw input field
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmount = parseFloat(withdrawField.value);

    // step 3: get previous withdraw total
    const previousWithdrawElement = document.getElementById("withdraw-total");
    const previousWithdrawTotal = parseFloat(previousWithdrawElement.innerText);

    // step 4: set withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    previousWithdrawElement.innerText = currentWithdrawTotal;

    // step 5: get the current total balance
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    // step 6: calculating final balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    // step 7: clear the deposit field
    withdrawField.value = "";
});