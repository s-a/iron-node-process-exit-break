var Plugin = function() {
	this.init();
	return this;
}


/*
	The debugger paused here because the script you are debugging called process.exit(). 
	You can check the call stack to get more informations.
*/
var _exit = function(code) {
	debugger;
}

Plugin.prototype.init = function() {
	process.exit = _exit;
};


module.exports = Plugin;