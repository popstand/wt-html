//
// For article_page.html
//
// Listen for click to toggle visibility of additional sharing networks
$(document).ready(function(){
    $('.show-more, .show-less').on('click', function(){
        $(this).hide()
            .siblings('.show-more, .show-less')
            .css('display', 'inline-block');
        $('.secondary-networks').toggleClass('active');
    })

    // Show sharing menu on header

})

//
// For article_page.html
//
// Place social sharing button in header at certain point
// when srolling by showing/hiding share buttons in the
// main (header) navbar when scrolling beyond the share
// buttons on the article page itself.
$(window).on('scroll', function() {
    var yScrollPos = window.pageYOffset;
    var $sharingEl = $('.post-container .share-btn-group');
    var scrollPosToShowNavbarSharing = $sharingEl.position().top + $sharingEl.height();
    var $categoryNavEl = $('.navbar-article-categories');
    var $socialNavEl = $('.navbar .share-btn-group');

    if(yScrollPos > scrollPosToShowNavbarSharing) {
        $categoryNavEl.hide();
        $socialNavEl.css('display', 'inline-block');
    }
    if(yScrollPos < scrollPosToShowNavbarSharing) {
        $categoryNavEl.show();
        $socialNavEl.hide();
    }
});