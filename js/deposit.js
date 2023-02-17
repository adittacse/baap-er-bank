// step 1: add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function() {
    // step 2: get the deposit amount from the deposit input field
    const depositField = document.getElementById("deposit-field");
    const newDepositAmount = parseFloat(depositField.value);

    // step 3: get the current deposit total amount
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);

    // step 4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // step 5: get balance current total
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmount = parseFloat(withdrawField.value);

    // step 6: get the current total balance
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    // step 7: add numbers to set the total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    // step 8: clear the deposit field
    depositField.value = "";
});