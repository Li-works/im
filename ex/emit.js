/**
 * 统一发送service
 * Created by likaituan on 15/7/31.
 */

define(function(req, exp, mod){
    "use strict";
    var ajax = req("sys.query").ajax;
    var obj = req("sys.object");
    var config = req("root.config");
    var testData = req("ex.testData");

	config.ajaxSetup();

    //发送
    mod.exports = function(uri){
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

});
