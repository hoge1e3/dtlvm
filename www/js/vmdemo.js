define(function (require,exports,module) {
    var parser=require("dolittle/minimal"),
        vm=require("dolittle/dtlvm"),
        dummy=false;
    exports.compile=function (src) {
        var node=parser.parseAsNode(src);
        var vmc=vm.node2vm(node);
        return vmc;
    };
    exports.run=function (vmc) {
        return $.post("runDtl.php",{script:JSON.stringify(vmc)});
    };
    //console.log(exports);
    //return exports;
});
