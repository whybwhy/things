// prototype을 활용한 패턴
// 함수 선언문 + prototype
function Vehicle(name, speed) {
    //console.dir(this);  // window
    this.name = name;
    this.speed = speed;
}
Vehicle.prototype.drive = function () {
    console.log(this.name + ' runs at ' + this.speed);
};
var myVehicle = new Vehicle('320d', 270); // this - Vehicle
myVehicle.drive();
// 생성자 + 모듈 패턴
Vehicle('118d', 170); // this - window
var Car = (function () {
    function Car(name, speed) {
        //console.log(this);
        this.name = name;
        this.speed = speed;
    }
    Car.prototype.drive = function () {
        console.log(this.name + ' runs at ' + this.speed);
    };
    return Car;
})();
var mycar = new Car('520d', '370');
mycar.drive();
//# sourceMappingURL=pattern_constructor.js.map