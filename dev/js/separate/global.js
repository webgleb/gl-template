var $window = $(window);
    window.cust = window.cust ? window.cust : {};

// get window width && height
var gW  = $window.outerWidth(true),
    gH  = $window.outerHeight(true);

$window.on('resize', function(){
    gW = $window.outerWidth(true);
    gH = $window.outerHeight(true);
});

// debounce
	// function debounce(func, wait, immediate) {
	// 	var timeout;
	// 	return function() {
	// 		var context = this, args = arguments;
	// 		var later = function() {
	// 			timeout = null;
	// 			if (!immediate) func.apply(context, args);
	// 		};
	// 		var callNow = immediate && !timeout;
	// 		clearTimeout(timeout);
	// 		timeout = setTimeout(later, wait);
	// 		if (callNow) func.apply(context, args);
	// 	};
	// };

// getScrollBarWidth
	// function getScrollBarWidth() {
	// 	var inner          = document.createElement('p');
	// 	inner.style.height = "200px";
	// 	inner.style.width  = "100%";

	// 	var outer              = document.createElement('div');
	// 	outer.style.visibility = "hidden";
	// 	outer.style.position   = "absolute";
	// 	outer.style.overflow   = "hidden";
	// 	outer.style.height     = "150px";
	// 	outer.style.width      = "200px";
	// 	outer.style.left       = "0px";
	// 	outer.style.top        = "0px";

	// 	outer.appendChild(inner);
	// 	document.body.appendChild(outer);

	// 	var w1 = inner.offsetWidth;
	// 	outer.style.overflow = 'scroll';

	// 	var w2 = inner.offsetWidth;
	// 	if (w1 == w2) w2 = outer.clientWidth;

	// 	document.body.removeChild(outer);

	// 	return w1 - w2; // scroll width
	// };
	// getScrollBarWidth();

// is_scroll
	// function is_scroll(){
	// 	// if window has scroll
	// 	return $(document).height() > $(window).height();
	// };
