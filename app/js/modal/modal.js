(function (window, $, modalBase) {

	modal.prototype = new modalBase({});
    modal.prototype.constructor = modal;

	function modal (options) {
		// Cloning template into HTML
		options.$el = options.clone ? $(options.$el).clone() : $(options.$el);
	    if (options.appendToEl) {
	        $(options.appendToEl).append(options.$el);
	    }

	    modalBase.call(this,options);

	    if (options.draggable) {
	        this.draggable = new draggabeManager(this.$el[0], {
	            dragHandle: '#title'
	        });
	    }

	    if (options.resizable) {
	        this.resizable = new resizeManager(this.$el[0], {
	            handles: ['BR']
	        });
	    }

		this.modalContainer = new overlay(this.$el[0]);
		return this;
	}

	modal.prototype.init = function (options) {
	    modalBase.prototype.init.call(this, options);
	    this.$el.css({ position: 'absolute' });
	};

	modal.prototype.defaults = {};
	modal.prototype.events = {};

	// process template for injection into DOM
    modal.prototype.render = function () {};

    // makes dialog visible in the UI
    modal.prototype.show = function () {};

    // makes dialog invisible in the UI
    modal.prototype.hide = function () {};

    window.modal = window.modal || modal;

})(window, jQuery, modalBase);