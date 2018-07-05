( function (window, $) {

	var delegateEventSplitter = /^(\S+)\s*(.*)$/;

	function modalBase (options) {
		this.init (options);
		return this;
	}

	modalBase.prototype.defaults = {};
	modalBase.prototype.events = {};

	modalBase.prototype.init = function (options) {
		this.options = $.extend({}, this.defaults, options);
		this.$el = $(options.el);
		this.bind();
		return this;
	};

	modalBase.prototype.bind = function () {
		var events = this.options.events ? modalBase.result(this.options.events) : null;
		if(!events) {
			return this;
		}

		this.unbind();
		for(var key in events) {
			var method = events[key];
			if(!$.isFunction(method)) {
				method = this[events[key]];
			}

			if(!method) {
				continue;
			}

			var match = key.match(delegateEventSplitter);
            var eventName = match[1];
            var selector = match[2];

            method = $.proxy(method,this);

            if (selector.length) {
                this.$el.on(eventName, selector, method);
            } else {
                this.$el.on(eventName, method);
            }
		}
	};

	modalBase.prototype.unbind = function () {
		this.$el.off();
		return this;
	}

	modalBase.prototype.destroy = function () {
        this.unbind();
        this.$el.remove();
    };

	modalBase.result = function (val) {
		return $.isFunction(val) ? val() : val;
	};

	window.modalBase = window.modalBase || modalBase;

})(window, jQuery);
