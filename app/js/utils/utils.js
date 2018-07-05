var utils = (function(window, $){
	return {
		getScrollBarOffset: getScrollBarOffset
	};

	function getScrollBarOffset(el) {
		var $el = $(el);
	    var $body = $('body');
	    var scrollbarWidth = getScrollbarWidth();

	    return {
	        x: el.scrollWidth > $el.outerWidth() ? scrollbarWidth : 0,
	        y: el.scrollHeight > $el.outerHeight() ? scrollbarWidth : 0
	    };
	}

	function getScrollbarWidth() {
		var innerCss = {
	        width: '100%',
	        height: '100%'
	    };
	    var outerCss = {
	        width: '100%',
	        height: '100%',
	        position: 'absolute',
	        top: 0,
	        left: 0,
	        visibility: 'hidden',
	        overflow: 'hidden'
	    };
	    var $inner = $('<div>dummyParentContainerNode</div>').css(innerCss);
	    var $outer = $('<div></div>').css(outerCss).append($inner);
	    var innerEl = $inner[0];
	    var outerEl = $outer[0];

	    $(parentEl || 'body').append(outerEl);
	    var innerWidth = innerEl.offsetWidth;

	    var innerHeight = innerEl.clientHeight + 100;
	    $inner.css('height', innerHeight+'px');
	    $outer.css('overflow', 'scroll');
	    var outerWidth = $outer[0].clientWidth;

	    $outer.remove();

	    return innerWidth - outerWidth; 
	}
})(window, jQuery);