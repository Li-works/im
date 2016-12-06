define(function(req, exp, mod){
	"use strict";
	var emit = req("ex.emit");

	mod.exports = {
		sendText: emit("user/sendText"),

		_end_ : 0

	};

});
