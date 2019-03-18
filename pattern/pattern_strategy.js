var Strategy = (function () {
    function Strategy() {
        this.strategy = null;
    }
    Strategy.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Strategy.prototype.execute = function () {
        this.strategy.execute();
    };
    return Strategy;
})();
var ShipStrategy = (function () {
    function ShipStrategy() {
        this.strategy = null;
    }
    ShipStrategy.prototype.execute = function () {
        console.log("by Ship");
    };
    return ShipStrategy;
})();
var LandStrategy = (function () {
    function LandStrategy() {
    }
    LandStrategy.prototype.execute = function () {
        console.log("by Land");
    };
    return LandStrategy;
})();
var strategies = new Strategy();
var ship = new ShipStrategy();
var land = new LandStrategy();
strategies.setStrategy(ship);
strategies.setStrategy(land);
strategies.execute();
//# sourceMappingURL=pattern_strategy.js.map