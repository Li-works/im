seekjs.config({
	ns: {
		util: "/utils/"
	},
	alias:{
		service: "/utils/service.js"
	}

});

var app = require("sys.app");

app.config({
	js: "/js/",
	tp: "/templates/",
	st: "/css/"
});

app.usePlugin("seekjs-plugin-mask");
app.usePlugin("seekjs-plugin-dialog");

app.init("home");