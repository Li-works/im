
var service = require("service");

exports.model = {
    name: "",
    text: "",
    allData:[]
};

//init
exports.onInit = function(){
    exports.model.allData = [];

    exports.model.name = window.prompt("请输入您的大名:");
    if(exports.model.name==""){
        exports.onInit();
    }
};

exports.onRender = function(){
    var ws = new WebSocket("ws://192.168.1.3:8888");

    // 打开WebSocket
    ws.onopen = function(event) {
        exports.emit({
            type: "join",
            text: `欢迎 ${exports.model.name} 光临寒舍!`
        });
    };

    //监听消息
    ws.onmessage = function(event) {
        //exports.emit(event.data);
        exports.showText(event.data);
    };

    ws.onerror =function(event){
        exports.emit({
            type: "join",
            text: `${exports.model.name} 出错了!`
        });
    };

    // 打开WebSocket
    ws.onclose = function(event) {
        exports.emit({
            type: "leave",
            text: `${exports.model.name} 离开了!`
        });
    };

    exports.ws = ws;

};

exports.emit = function(json){
    exports.showText(json);
    exports.ws.send(JSON.stringify(json));
};

//send message
exports.submit = function() {
    exports.emit({
        type: "send_message",
        name: exports.model.name,
        text: exports.model.text
    });
};

exports.showText = function(json){
    exports.model.allData = exports.model.allData.concat(json);
    exports.panelPart.render();
};