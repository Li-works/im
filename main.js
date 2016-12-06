seekjs.config({
	ns: {
		js: seekjs.resolve("./js/"),
		tp: seekjs.resolve("./templates/"),
		st: seekjs.resolve("./css/"),
		ex: seekjs.resolve("./ex/"),
	},
	alias:{
		service: seekjs.resolve("./ex/service")
	}

});


define(function(req, exp){
	"use strict";
	var app = req("sys.app");

	app.setPath({
		js: "js.",
		tp: "tp.",
		st: "st."
	});

	app.usePlugin("sys.ui.mask");
	app.usePlugin("sys.ui.dialog");

	app.init("home");
	
});
