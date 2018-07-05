var resizeManager = (function (window, $){
	function resizeManager(el, options) {
		this.$el = $(el);
		this.options = $.extend({},defaults, options);
		createResizeHandles();
		bind();
	}

	resizeManager.proptotype.destroy = function() {
		this.$el.off('mousedown.resize-manager');
        this.$el.find('.resize-manager').remove();
        this.$el = null;
        this.options = defaults;
	};

	function createResizeHandles() {
		var handlesCss = this.options.handlesCss;
        var handles = this.options.handles;
        var $handles;

        // loop the resize handles CSS hash, create elements,
        // and append them to this.$el
        // data-handle attribute is used to help determine what element
        // properties should be adjusted when resizing
        for (var i = 0; i < handles.length; i++) {
            if (handlesCss[handles[i]]) {
                this.$el
                    .append($('<div class="resize-manager" data-handle="' +
                    handles[i] + '">')
                    .css(handlesCss[handles[i]]));
            }
        }

        $handles = this.$el.find('.resize-manager');
        // ensure that container is an offset parent for positioning handles
        if (this.$el !== $handles.offsetParent()) {
            this.$el.css('position', 'relative');
        }
        $handles.css('display', 'block');
	}

	function bind() {

		$(window).on('mousedown.resize-manager', function(m){

			var direction = $el.attr('data-handle');

			$(window).on('mousemove.resize-manager', function(mo){
				this.$el.css(getResizeOffset(direction,m,mo));
			});

			function getResizeOffset(direction, dPoint, mPoint) {
				var offset = {};
				var elOffset       = this.$el.offset();
				var initialHandleX = dPoint.pageX;
				var initialHandleY = dPoint.pageY;
				var finalHandleX   = mPoint.pageX;
				var finalHandleY   = mPoint.pageY;
 				switch(direction) {
					case 'TL': break;
					case 'TM': break;
					case 'TR': break;
					case 'MR': break;
					case 'BR': break;
					case 'BM': break;
					case 'BL': break;
					case 'ML': break;
				}
			}
		});

		$('body').on('mouseup.resize-manager', function (e) {
            $(window).off('mousemove.resize-manager');
        });
	}

	return resizeManager;

	    // default resize handle CSS
    var handlesCss = {
        width: '10px',
        height: '10px',
        cursor: 'se-resize',
        position: 'absolute',
        display: 'none',
        'background-color': '#000'
    };

    // options defaults
    var defaults = {
        handles: ['BR'],
        handlesCss: {
            TM: $.extend({}, handlesCss, {
                cursor: 'n-resize', top: 0, left: '50%'
            }),
            TR: $.extend({}, handlesCss, {
                cursor: 'ne-resize', top: 0, right: 0
            }),
            MR: $.extend({}, handlesCss, {
                cursor: 'e-resize', bottom: '50%', right: 0
            }),
            BR: $.extend({}, handlesCss, { bottom: 0, right: 0 }),
            BM: $.extend({}, handlesCss, {
                cursor: 's-resize', bottom: 0, left: '50%'
            }),
            ML: $.extend({}, handlesCss, {
                cursor: 'w-resize', bottom: '50%', left: 0
            }),
            BL: $.extend({}, handlesCss, {
                cursor: 'sw-resize', bottom: 0, left: 0
            }),
            TL: $.extend({}, handlesCss, { cursor: 'nw-resize' }),
        }
    };
})(window, jQuery);