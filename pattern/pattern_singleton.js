// 싱글턴 패턴 - 속성 공개
var obj = {
    a: "jin",
    b: function () {
        //console.dir(this);
        //console.log(this.a);
    }
};
obj.b();
console.log(obj.a);
// 단점 : 모든 속성이 공개되어 있다.
console.log("-----------------------");
// 싱글턴 패턴 - 속성 비공개
var singleton = (function () {
    var instance;
    var attr = 'this is singleton';
    console.dir(this);
    function initiate() {
        return {
            a: attr,
            b: function () {
                //console.dir(this);
                console.log('a [%o]', this.a); // this.a 로 접근
            }
        };
    }
    return {
        getInstance: function () {
            if (!instance) {
                //console.log("first");
                instance = initiate();
                //console.dir(instance)
            }
            return instance;
        }
    };
})();
var first = singleton.getInstance();
var second = singleton.getInstance();
console.log(first === second);
console.log(typeof first);
console.log(first.a, first.b()); // b에는 return이 없기 때문에 undefined가 로깅
first.b();
//# sourceMappingURL=pattern_singleton.js.map