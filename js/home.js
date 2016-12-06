define(function(req, exp){
	"use strict";
	var service = req("service");

	exp.model = {
		name: "",
		text: "",
		allData:[]
	};

	//init
	exp.onInit = function(){
		exp.model.allData = [];

        exp.model.name = window.prompt("请输入您的大名:");
        if(exp.model.name==""){
            exp.onInit();
        }
    };

    exp.onRender = function(){
        var ws = new WebSocket("ws://192.168.1.3:8888");

        // 打开WebSocket
        ws.onopen = function(event) {
            exp.emit({
                type: "join",
                text: `欢迎 ${exp.model.name} 光临寒舍!`
            });
        };

        //监听消息
        ws.onmessage = function(event) {
            //exp.emit(event.data);
            exp.showText(event.data);
        };

        ws.onerror =function(event){
            exp.emit({
                type: "join",
                text: `${exp.model.name} 出错了!`
            });
        };

        // 打开WebSocket
        ws.onclose = function(event) {
            exp.emit({
                type: "leave",
                text: `${exp.model.name} 离开了!`
            });
        };

        exp.ws = ws;

    };

    exp.emit = function(json){
        exp.showText(json);
        exp.ws.send(JSON.stringify(json));
    };

	//send message
	exp.submit = function() {
        exp.emit({
            type: "send_message",
            name: exp.model.name,
            text: exp.model.text
        });
    };

    exp.showText = function(json){
        exp.model.allData = exp.model.allData.concat(json);
        exp.panelPart.render();
	};

});
