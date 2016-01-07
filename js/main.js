$(document).ready(function(){
    // Listen for click to toggle visibility of additional sharing networks
    $('.show-more, .show-less').on('click', function(){
        $(this).hide()
            .siblings('.show-more, .show-less')
            .css('display', 'inline-block');
        $('.secondary-networks').toggleClass('active');
    })
})