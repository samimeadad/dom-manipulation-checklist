document.getElementById( 'login-button' ).addEventListener( 'click', function () {
    const userEmail = document.getElementById( 'user-email' ).value;
    const userPassword = document.getElementById( 'user-password' ).value;

    if ( userEmail == 'sami@baap.com' & userPassword == 'secret' ) {
        window.open( "banking.html" );
    }
    else {
        alert( 'WRONG INPUT!' );
    }
} );