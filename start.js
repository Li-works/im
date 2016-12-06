require("../../github/nova/socket/ws_server");

var path = require("path");

var nova = require("../../github/nova/server/core");

nova.addStatic({
	dir: "./",
	path: "/"	
});

nova.addRemote({
	dir: path.resolve("./java/"),
	path: "/service/",
	rule: require("./rule")
});

nova.port = 1024;

nova.start();
