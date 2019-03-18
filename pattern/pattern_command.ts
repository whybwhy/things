/*
        특징
            + 실제 사용자와 파트너(?), 기능을 분리할 수 있다.
            - 기능에서 보안이 떨어진다.
            - 어느땐 거창 하다는 느낌도 든다.
            - 사용자 / 실행 / 기능 으로 분리하면 제법 잘 어울린다.
            - 사용자가 command 명을 알고 있어야 한다.
            - Commander 어떻게 구현하느냐에 따라 잘못된 비지니스를 구현할 수도 있다.
        */
// 필요한 기능을 정의 한다.
var strategy = {
    addWatter : function(count) {
        console.log("strategy.addWatter");
        return count;
    },
    addSirup : function(count) {
        console.log("strategy.addSirup");
        return count;
    },
    addShot : function(count) {
        console.log("strategy.addShop")
        return count;
    },
    makeCoffee : function() {
        console.log("strategy.makeCoffee");
    }
}

var Partner = (function() {

    function Partner() {
        this.commands = [];
    }

    Partner.prototype.execute = function() {
        console.log(this)
        //console.log(this.commands)
        this.commands.forEach(
            function(command) {
                //command();    // 동일
                command.call(null);
            }
        );
    }

    Partner.prototype.do = function(command, args) {
        this.commands.push( function() { // 재밌다. push안에 함수를 구현했다. 잘 사용하면 좋은 기능이다.

            // (나에게) call 이 어려운 이유
            // call, apply, bind 는 한번에 3가지 기능을 한다.
            // 함수 호출
            // this 변경
            // arg 전달
            // 헷갈리는 경우 먼저 호출 기능으로 먼저 생각하고
            // 그다음에 arg 전달,
            // 그런 다음에 this 변경이라고 생각하면 다가가기 쉽다. this 안쓰면 arguments에 null로 세팅
            // 결론은 호출로 생각하면 매우 단순하다. call, apply, bind 이름대로 할 뿐이다.
            command.call(null, args);

        });
    }

    Partner.prototype.init = function() {
        this.commands = [];

    }

    Partner.prototype.pop = function() {
        this.commands.pop();    // 마지막 요소 제거
    }

    return Partner;
})();

var User = (
    function() {
        function User() {}

        User.prototype.approve = function(commander) { // approve : 승인하다.
            //commander.execute();
            console.log(commander)
            commander.call(null); //비교해볼 것
        }

        return User;
    }
)();

var user = new User();
var partner = new Partner();

// 기능 등록
partner.do(strategy.addShot, 1);
partner.pop();
partner.do(strategy.addSirup, 1);
partner.init();
partner.do(strategy.addWatter, 1);
partner.do(strategy.makeCoffee);

//user.approve(partner);
user.approve(partner.execute);


