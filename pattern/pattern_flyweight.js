// prototype 을 활용한 패턴
// constructor + 모듈 패턴과 유사
var Minion = (function () {
    function Minion(name) {
        this.name = name;
    }
    Minion.prototype.hp = 100;
    Minion.prototype.mp = 70;
    Minion.prototype.attack = function (target) {
        console.log(this.name + target.name);
    };
    return Minion;
})();
var m0 = new Minion("m0");
var m1 = new Minion("m1");
console.log(m0.hp);
m0.hp = 200;
console.log(m0.hp);
m0.attack(m1);
//# sourceMappingURL=pattern_flyweight.js.map