var stackOrderManager = (function(stackContextManager){
	return {
		bringToFront: bringToFront,
		sendToBack: sendToBack
	};

	function bringToFront(el, createContext, rootEl) {
		moveUpDown(el,createContext,rootEl,true);
	}

	function sendToBack(el, createContext, rootEl) {
		moveUpDown(el,createContext,rootEl,false);
	}

	function moveUpDown(el, createContext, rootEl, increment) {
		var stackingContextEl = stackContextManager.getStackingCtx(el);

		if(createContext && stackingContextEl !== el.parentNode) {
			el.parentNode.style.position = 'relative';
			el.parentNode.style.zIndex = 0;
		}

		reStackContainers(el, increment);
	}

	function reStackContainers(el, increment) {
		var stackingCtxEl = jenga.getStackingCtx(el);
	    var siblings = stackingCtxEl.childNodes;
	    var siblingsMaxMinZindex = increment ? 0 : -1;

	    for(var i = 0; i<siblings.length; i++) {
	    	
	    }
	}
	
})(stackContextManager);