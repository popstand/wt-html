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


    // select dropdown menu submenu item
    $(".dropdown_submenu li").on('click', function() {

      // remove other selected lis
      $(".dropdown_submenu li").removeClass("selected");
      $(this).addClass("selected")

      // load the new stuff
    })
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
    var scrollPosToShowNavbarSharing = $sharingEl.position().top + $sharingEl.height();

    var $sharingEl = $('.post-container .share-btn-group');
    var $categoryNavEl = $('.navbar-article-categories');
    var $socialNavEl = $('.navbar-social');

    if(yScrollPos > scrollPosToShowNavbarSharing) {
        $categoryNavEl.hide();
        $socialNavEl.show();
    }
    if(yScrollPos < scrollPosToRelocateAt) {
        $categoryNavEl.show();
        $socialNavEl.hide();
    }
});
