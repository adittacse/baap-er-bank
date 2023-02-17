// step 1 : add event listener to the withdraw button
document.getElementById("btn-withdraw").addEventListener("click", function() {
    // step 2: get the deposit amount from the withdraw input field
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmount = parseFloat(withdrawField.value);

    // step 3: clear the deposit field
    withdrawField.value = "";

    // is type is "text"
    // if (isNan(newWithdrawAmount)) {
    //     alert("Please enter a valid number");
    //     return;
    // }

    // step 4: get previous withdraw total
    const previousWithdrawElement = document.getElementById("withdraw-total");
    const previousWithdrawTotal = parseFloat(previousWithdrawElement.innerText);

    // step 5: get the current total balance
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    // step 7: validation
    if (newWithdrawAmount > previousBalanceTotal) {
        alert("Not enough money");
        return;
    }

    // step 8: set withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    previousWithdrawElement.innerText = currentWithdrawTotal;

    // step 9: calculating final balance
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
});