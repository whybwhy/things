/**
 * 특징
 * 기존에 있던 구조를 새 구조로 유연하게 전환하거나 새 구조에서 기존의 구조로 전환하는 데 사용하는 패턴
 *
 * 내 생각은
 * strategy 패턴과 비슷한 기능. 차이점은 인스턴스의 생성자 vs prototype 에 기능을 초기화하는 차이가 있다.
 * 전체적인 시스템의 세팅 혹은 재사용을 위한 세팅인지 맥락에 맞추어 선택해야 한다.
 */
var System = (function () {
    function System(recipe) {
        //console.log(this);
        this.recipe = recipe;
    }
    System.prototype.make = function () {
        this.recipe.make();
    };
    return System;
})();
var oldVersion = {
    make: function () {
        console.log("americano~");
    }
};
var newVersion = {
    make: function () {
        console.log("latte~");
    }
};
// 교체 전
var system = new System(oldVersion);
system.make();
// 교체 후
system = new System(newVersion);
system.make();
//# sourceMappingURL=pattern_adapter.js.map