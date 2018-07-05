var overlay = (function(window, $, stackOrderManager, utils){

	function overlay(el, options) {
		this.$el = $(el);
		this.setOptions(options);
	}

	// position the overlay element relative to any element
	overlay.prototype.position = function(options) {
		// Configure the options before starting to re-position
		this.setOptions(options);

		if(this.options.alignToEl) {
			this.options.alignToEl = this.options.alignToEl.tagName === 'BODY' ? $(window)[0] : 
                                                                                 this.options.alignToEl;
        }
		position($el);
	};

	overlay.prototype.setOptions = function(options) {
		this.options = options ? $.extend(this.options, options) : this.options;
	};

	overlay.prototype.destroy = function(options) {
		var $parentEl = $(el.parentNode);

	    // unbind event handlers
	    $parentEl.off('scroll.overlay');
	    $parentEl.off('resize.overlay');

	    // null out references
	    this.$el = null;

	    // clear out any developer-defined options
	    this.options = defaults;
	};

	return overlay;

	function position(el) {
		var $parentEl = el.parentNode.tagName === 'BODY' ? $(window) : $(el.parentNode);
		var $el = $(el);
		var options = this.options;

		var parentScrollBarOffset = utils.getScrollBarOffset($parentEl);

		if (el.parentNode !== el.offsetParent) {
	        el.parentNode.style.position = 'relative';
	    }

	    switch (options.align) {
	        case 'TL':
	            pos.top = 0;
	            pos.left = 0;
	            break;
	        case 'TR':
	            pos.top = 0;
	            pos.right = 0;
	            break;
	        case 'BL':
	            pos.bottom = 0;
	            pos.left = 0;
	            break;
	        case 'BR':
	            pos.bottom = 0;
	            pos.right = 0;
	            break;
	        case 'BC':
	            pos.bottom = 0;
	            pos.left = ((($parentEl.outerWidth() -
	                parentScrollBarOffset.y - $el.outerWidth()) / 2) +
	                $parentEl.scrollLeft());
	            break;
	        case 'TC':
	            pos.top = 0;
	            break;
	        case 'M':
	            pos.left = ((($parentEl.outerWidth() -
	                parentScrollBarOffset.y - $el.outerWidth()) / 2) +
	                $parentEl.scrollLeft());
	            pos.top = ((($parentEl.outerHeight() -
	                parentScrollBarOffset.x - $el.outerHeight()) / 2) +
	                $parentEl.scrollTop());
	            break;
	    }

	    // if the positions are less than 0 then the
	    // element being positioned is larger than
	    // its container
	    pos.left = pos.left > 0 ? pos.left : 0;
	    pos.top = pos.top > 0 ? pos.top : 0;

	    // position the element absolutely and
	    // set the top and left properties
	    $el.css($.extend({
	        position: 'absolute',
	        display: 'block'
	    }, pos));

	    // if the element should not move when the containing
	    // element is resized or scrolled then bind event listeners
	    // and call the position function
	    if (options.fixed && options.align === 'M' && !options.bound) {
	        options.bound = true;
	        bindListeners($parentEl, function () {
	            position(el);
	        });
	    }
	}

	function bindListeners($offsetParent, callback) {
	    // unbind event to ensure that event listener is never bound more than once
	    $offsetParent.off('scroll.overlay').on('scroll.overlay', function (e) {
	        callback();
	    });
	    $offsetParent.off('resize.overlay').on('resize.overlay', function (e) {
	        callback();
	    });
	}

	// default options
    var defaults = {
        alignToEl: null,
        align: 'M',
        fixed: true,
        offsets: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        	}
    };

})(window, jQuery, stackOrderManager, utils);