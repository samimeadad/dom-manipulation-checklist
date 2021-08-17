//Get user input and return the value to the event handler
function getUserInput( inputId ) {
    const inputField = document.getElementById( inputId );
    const inputFieldText = inputField.value;
    const inputAmount = parseFloat( inputFieldText );
    inputField.value = '';
    return inputAmount;
}

document.getElementById( 'deposit-button' ).addEventListener( 'click', function () {
    const inputDepositAmount = getUserInput( 'deposit-input' );
    
} );


document.getElementById( 'withdraw-button' ).addEventListener( 'click', function () {
    const inputWithdrawAmount = getUserInput( 'withdraw-input' );

} );