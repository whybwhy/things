/**
 * 특징 : java 인터페이스의 역할을 하는 객체와 실제 필요한 프로세스에 대한 객체를 따로 구현하여 기능을 제공
 * 프로세스의 순서와 동기화를 고려해야 함.
 */
// 인터페이스
var CRUD = (function () {
    function CRUD() {
        //  초기화
        this.process = new Process();
    }
    CRUD.prototype.create = function () {
        this.process.create0();
        this.process.create1();
    };
    CRUD.prototype.read = function () {
        this.process.read0();
        this.process.read1();
    };
    CRUD.prototype.update = function () {
        this.process.update0();
        this.process.update1();
    };
    CRUD.prototype.delete = function () {
        this.process.delete0();
        this.process.delete1();
    };
    return CRUD;
})();
// 실제 프로세스
var Process = (function () {
    function Process() {
        // 초기화
    }
    Process.prototype.create0 = function () { console.log("create0"); };
    Process.prototype.create1 = function () { console.log("create1"); };
    Process.prototype.read0 = function () { console.log("read0"); };
    Process.prototype.read1 = function () { console.log("read1"); };
    Process.prototype.update0 = function () { console.log("update0"); };
    Process.prototype.update1 = function () { console.log("update1"); };
    Process.prototype.delete0 = function () { console.log("delete0"); };
    Process.prototype.delete1 = function () { console.log("delete1"); };
    return Process;
})();
var crud = new CRUD();
crud.create();
//# sourceMappingURL=pattern_facade.js.map