$(document).ready(function() {
//ANIMATING THE HAMBURGER    
    const open = 'navigation__hamburger--is-open';
    const hamburger = $('.navigation__hamburger');

    hamburger.click(function () {
        $(this).toggleClass(open);
    });
    });