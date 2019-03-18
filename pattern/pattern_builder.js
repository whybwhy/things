/**
 * 특징
 * 인스턴스(this) 를 리턴한다.
 *
 */
// 의문점 : name이 어떻게?? 아직 모르겠다. 어떻게 로그를 출력해야 나올까?
// -> build에 저장되는구나..
// -> 그럼 _age, _family를 따로 뺀 이유는?
// -> 동적으로 사용하기 위해. name은 필수적인 프로퍼티이기 때문인것 같다.
// 의문점 : this
var person = function (name) {
    var _family;
    var _age = 0;
    //console.log(name, _family, _age);
    //console.log(this); // window
    //console.dir(this);
    return {
        setAge: function (age) {
            _age = age;
            //console.log(this);
            return this;
        },
        setFamily: function (family) {
            _family = family;
            //console.dir(this);
            return this;
        },
        build: function () {
            //console.dir(this);
            return {
                name: name,
                family: _family,
                age: _age
            };
        }
    };
};
var nabbo = person('nabbo').setAge(39).setFamily(['bk']).build();
//console.dir(nabbo);
var whybwhy = person('whybwhy').setAge(38).build();
//console.dir(whybwhy);
var test = person("name").build();
//console.log((test));
// build 변형
var Coffee = (function () {
    //console.log(this) // window
    function Coffee(name, shot, milk) {
        this.name = name; // this로 선언하지 않으면 mix에서 접근이 불가능하다.
        this.shot = shot;
        this.milk = milk;
        console.log(this);
    }
    Coffee.prototype.mix = function (target) {
        console.log(this.name + '' + target.name);
        //console.log (_name + '' + target.name);
    };
    return Coffee;
})();
var createCoffee = function (name) {
    var _shot;
    var _milk;
    return {
        setShot: function (shot) {
            _shot = _shot;
            return this;
        },
        setMilk: function (milk) {
            _milk: milk;
            return this;
        },
        build: function () {
            return new Coffee(name, _shot, _milk);
        }
    };
};
var americano = createCoffee("americano").setShot(2).build();
var latte = createCoffee("latte").setShot(2).setMilk(true).build();
latte.mix(americano);
console.log(Coffee); // 대박...대박...
//# sourceMappingURL=pattern_builder.js.map