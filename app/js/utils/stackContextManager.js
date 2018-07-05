var stackContextManager = (function(){
	return {
		isStackingCtx: isStackingCtx,
		getStackingCtx: getStackingCtx
	};

	function isStackingCtx(el) {
		return el.tagName === 'HTML' || (isPositioned(el) && isStackedByIndex(el) && isStackedByCss(el));
	}

	function getStackingCtx(el) {
		var $parentEl = el.parentNode;
		while(!isStackingCtx($parentEl)) {
			$parentEl = $parentEl.parentNode;
		}
		return $parentEl;
	}

	function isPositioned(el) {
		return el.style.position !== 'static';
	}

	function isStackedByIndex(el) {
		return el.style.zIndex !== 'auto';
	}

	function isStackedByCss(el) {
		var style = el.style;
		if(style.opacity < 1) { return true; }
		if(style.transform !== 'none') { return true; }
		if(style.transformStyle === 'preserve-3d') { return true; }
		if(style.perspective !== 'none') { return true; }
		if(style.flowFrom !== 'none' && style.content !== 'normal') { return true; }
		if(style.position === 'fixed' && isFixedStackingCtx()) { return true; }
		return false;
	}

	function isFixedStackingCtx() {
		return browsers[browser.name].fixed >= parseInt(browser.version, 10);
	}

	// this will be used for addressing all the browser- & version-specific
	// items that impact stacking contexts
	// fixed - the version where position: fixed started creating a stacking context
	var browsers = {
	    chrome: {
	        fixed: 22
	    }
	};

	// get browser version and name
	// (we did not write this; if someone knows who did please let us know
	// so we can attribute the code to the author!)
	var browser = (function () {
		// Need to be updated to a simpler form
	    var N = navigator.appName;
	    var ua = navigator.userAgent;
	    var tem;
	    var M = ua.match(
	        /(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
	    if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) {
	        M[2] = tem[1];
	    }
	    M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];

	    return {
	        name: M[0].toLowerCase(),
	        version: M[1]
	    };
	})();
})();