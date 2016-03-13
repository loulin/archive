"use strict";
(function(){
    window.jsbridge = {plugins: {}};
    window.jsbridge.plugins.CoreNativeApi = {
        callNative: function (param) {
            var jsNativeMessage = {
                service: "CoreNativeApi",
                action: "callNative"
            };
            return window.prompt("jsbridge:" + JSON.stringify(jsNativeMessage), param);
        }
    };

})();