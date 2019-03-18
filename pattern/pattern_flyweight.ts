// prototype 을 활용한 패턴
// constructor + 모듈 패턴과 유사

const Minion = (function() {
    function Minion(name) {
        this.name = name;
    }

    Minion.prototype.hp = 100;
    Minion.prototype.mp = 70;
    Minion.prototype.attack = function(target) {
        console.log(this.name + target.name);
    }
    return Minion;
})();

const m0 = new Minion("m0");
const m1 = new Minion("m1");
console.log(m0.hp);
m0.hp = 200;
console.log(m0.hp)
m0.attack(m1);
