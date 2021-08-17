const titles = document.getElementsByTagName( 'h1' );
console.log( titles );
for ( const h2 of titles ) {
    h2.addEventListener( 'click', function ( event ) {
        event.target.innerText = "Clicked";
    } );
}

document.getElementById( 'header-button' ).addEventListener( "click", function () {
    document.getElementById( 'header-title' ).innerText = 'I am Penguin';
} );