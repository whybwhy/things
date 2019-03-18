/**
 * 프록시를 통해 컨트롤한다. 업무에서 proxy 거쳐 나가는 것과 동일한 패턴.
 * facade 와도 비슷하지만 이건 보안/통제의 개념이 더 강한 느낌
 */
var CoreProxy = (function () {
    function CoreProxy() {
        this.core = new Core();
    }
    ;
    CoreProxy.prototype.network = function () {
        this.core.lie();
    };
    return CoreProxy;
})();
// 기능을 따로 만들어 놓는다.
var Core = (function () {
    function Core() {
        // 초기화
    }
    Core.prototype.fact = function () {
        console.log("this is fact");
    };
    Core.prototype.lie = function () {
        console.log("this is lie");
    };
    return Core;
})();
var networking = new CoreProxy();
networking.network();
//# sourceMappingURL=pattern_proxy.js.map