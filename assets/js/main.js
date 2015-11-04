

/* ========= Masonry ========= */

(function() {

	// Main content container
	var page = 0;
	var $container = $('.list');

	// Masonry + ImagesLoaded
	$container.imagesLoaded(function() {
		$container.masonry({
			// selector for entry content
			itemSelector: '.item'
		});
	});

	// Infinite Scroll
	$container.infinitescroll({

		// selector for the paged navigation (it will be hidden)
		navSelector: ".pagination",
		// selector for the NEXT link (to page 2)
		nextSelector: ".older-posts",
		// selector for all items you'll retrieve
		itemSelector: ".item",

		// finished message
		loading: {
			finishedMsg: 'No more pages to load.'
		}
	},

	// Trigger Masonry as a callback
	function(newElements) {
		// hide new items while they are loading
		var $newElems = $(newElements).css({
			opacity: 0
		});
		// ensure that images load before adding to masonry layout
		$newElems.imagesLoaded(function() {
			// show elems now they're ready
			$newElems.animate({
				opacity: 1
			});
			$container.masonry('appended', $newElems, true);
		});

	});

})();

/* ========= Menu ========= */

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "menu" link is shown
	var offset = 300;

	var navigationContainer = $('#cd-nav'),
		mainNavigation = navigationContainer.find('#cd-main-nav ul');

	//hide or show the "menu" link
	checkMenu();
	$(window).scroll(function(){
		checkMenu();
	});

	//open or close the menu clicking on the bottom "menu" link
	$('.cd-nav-trigger').on('click', function(){
		$(this).toggleClass('menu-is-open');
		//we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
		mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');

	});

	function checkMenu() {
		if( $(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
			navigationContainer.addClass('is-fixed').find('.cd-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
				mainNavigation.addClass('has-transitions');
			});
		} else if ($(window).scrollTop() <= offset) {
			//check if the menu is open when scrolling up
			if( mainNavigation.hasClass('is-visible')  && !$('html').hasClass('no-csstransitions') ) {
				//close the menu with animation
				mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					//wait for the menu to be closed and do the rest
					mainNavigation.removeClass('is-visible is-hidden has-transitions');
					navigationContainer.removeClass('is-fixed');
					$('.cd-nav-trigger').removeClass('menu-is-open');
				});
			//check if the menu is open when scrolling up - fallback if transitions are not supported
			} else if( mainNavigation.hasClass('is-visible')  && $('html').hasClass('no-csstransitions') ) {
					mainNavigation.removeClass('is-visible has-transitions');
					navigationContainer.removeClass('is-fixed');
					$('.cd-nav-trigger').removeClass('menu-is-open');
			//scrolling up with menu closed
			} else {
				navigationContainer.removeClass('is-fixed');
				mainNavigation.removeClass('has-transitions');
			}
		} 
	}
});

/* ========= Responsive Videos with Fidvids ========= */

$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
	$('body').fitVids();
});

/* ========= Highlight ========== */

$(document).ready(function() {
	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});
});
