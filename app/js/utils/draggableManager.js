var draggableManager = (function(window, $){

	function draggableManager(el, options) {
		this.options = $.extend({},defaults,options);
		this.$el = $(el);
		// this.isChildOfDocFragment = isChildOfDocFragment(el);
		// this.originalDragHandleCursor = this.$dragHandle.css('cursor');

		this.dragHandle = this.options.dragHandle ? this.$el.find(this.options.dragHandle) : this.$el;
		this.dragHandle.css({ cursor: (this.options.cursor || 'move') });

		this.bind();
	}

	draggableManager.prototype.bind = function() {

		var self = this;

		$('body').on('mouseup.draggable', function(e){
			$(window).off('mousemove.draggable');
		});

		this.$el.on('mousedown.draggable', function(e){
			var mousePosition = { x: e.pageX, y: e.pageY };

			$(window).on('mousemove.draggable', function(f){
				var xDiff = f.pageX - mousePosition.x;
            	var yDiff = f.pageY - mousePosition.y;

            	var draggableOffset = self.dragHandle.offset();

            	self.$el.css({
            		top: draggableOffset.top + yDiff,
            		left: draggableOffset.left + xDiff,
            		position: 'absolute'
            	});

            	mousePosition = { x: f.pageX, y: f.pageY };
			});
		});
	};

	draggableManager.prototype.destroy = function() {
		this.$el.off('mousedown.draggable');
	    this.$dragHandle.css({ cursor: this.originalDragHandleCursor });
		this.$el = null;
	    this.$dragHandle = null;
		this.options = defaults;
	};

	// instance default options
    var defaults = {
        dragHandle: null
    };

    return draggableManager;

})(window, jQuery);