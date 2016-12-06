(function(req, exp){
	"use strict";

    //var socket = require("../../../github/nova/socket/server");

    exp.sendName = function(){
        client.write(`${params.name}进入了聊天室`);
        return params.name;
    };

	exp.sendText = function(params){
        client.write(JSON.stringify(params));
        return params;
        /*
		return {
			chk: {
				name: "用户名",
				text: "留言内容"
			},
			success: true,
			code:0,
			data: params
		};
		*/
	};
 
})(require, exports);
