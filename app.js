/*
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/


$('#input').on('change', function() {
    var val, val2;
    
    val = $( '#input' ).val();

    val2 = $('.articles').children('h1');
    
    /*
    Why can't I do
    $(h1).sibling();
    
    or
    
    $(h1).next();
    */
    
    val2.text(val);
});
