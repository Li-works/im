/**
 * 统一发送service
 * Created by likaituan on 15/7/31.
 */


var ajax = require("jquery").ajax;
var obj = require("sys.pipe");
var config = require("util.config");
var testData = require("util.test-data.json");

config.ajaxSetup();

//发送
module.exports = function(uri){
    return function(params, callback) {
        if(arguments.length==1){
            callback = params;
            params = {};
        }
        var successCallback = config.ajaxRes(callback, params);
        if(testData[uri]) {
            return successCallback(testData[uri]);
        }
        ajax({
            url: config.baseUri + uri,
            type: "post",
            data: obj.filter(params, "typeof($item) != 'object'"),
            success: successCallback
        });
    }
};