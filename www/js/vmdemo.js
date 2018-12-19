define(function (require,exports,module) {
    var parser=require("dolittle/minimal"),
        vm=require("dolittle/dtlvm"),
        DU=require("DeferredUtil"),
        dummy=false;
    exports.run=function (src) {
        var node=parser.parseAsNode(src);
        var vmc=vm.node2vm(node);
        return DU.resolve({
            code: vmc
        });
    };
    console.log(exports);
    //return exports;
});
