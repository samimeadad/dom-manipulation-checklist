//Get user input and return the value to the event handler
function getUserInput( inputId ) {
    const inputField = document.getElementById( inputId );
    const inputFieldText = inputField.value;
    const inputAmount = parseFloat( inputFieldText );
    inputField.value = '';
    return inputAmount;
}

//Calculate the Total amount for Deposit and Withdraw and update it
function updateTotalFiled( totalFieldId, inputAmount ) {
    const totalField = document.getElementById( totalFieldId );
    const previousTotalFieldText = totalField.innerText;
    const previousTotalFieldAmount = parseFloat( previousTotalFieldText );
    totalField.innerText = previousTotalFieldAmount + inputAmount;
}

//Get the current balance and return it to the event handler
function getBalance() {
    const balanceField = document.getElementById( 'balance-total' );
    const previouseBalanceFieldText = balanceField.innerText;
    const previousBalanceFieldAmount = parseFloat( previouseBalanceFieldText );
    return previousBalanceFieldAmount;
}

//Calculate the total amount for Balance and update it
function updateBalanceField( inputAmount, isAdd ) {
    const balanceField = document.getElementById( 'balance-total' );
    const previousBalanceAmount = getBalance();
    if ( isAdd == true ) {
        balanceField.innerText = previousBalanceAmount + inputAmount;
    }
    else {
        balanceField.innerText = previousBalanceAmount - inputAmount;
    }
}

//Event handler for Deposit Button
document.getElementById( 'deposit-button' ).addEventListener( 'click', function () {
    const inputDepositAmount = getUserInput( 'deposit-input' );
    if ( inputDepositAmount > 0 ) {
        updateTotalFiled( 'deposit-total', inputDepositAmount );
        updateBalanceField( inputDepositAmount, true );
    }
    else {
        alert( 'Wrong User Input!' )
    }
} );


//Event handler for Withdraw Button
document.getElementById( 'withdraw-button' ).addEventListener( 'click', function () {
    const inputWithdrawAmount = getUserInput( 'withdraw-input' );
    const previousBalanceAmount = getBalance();
    if ( inputWithdrawAmount > 0 && previousBalanceAmount > inputWithdrawAmount ) {
        updateTotalFiled( 'withdraw-total', inputWithdrawAmount );
        updateBalanceField( inputWithdrawAmount, false );
    }
    else {
        alert( 'Wrong User Input' );
    }
} );