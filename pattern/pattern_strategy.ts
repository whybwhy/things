const Strategy = (
    function() {

        function Strategy() {
            this.strategy = null;
        }

        Strategy.prototype.setStrategy = function(strategy) {
            this.strategy = strategy;
        }

        Strategy.prototype.execute = function() {
            this.strategy.execute();
        }

        return Strategy;
    }
)();

const ShipStrategy = (
    function() {

        function ShipStrategy() {
            this.strategy = null;
        }

        ShipStrategy.prototype.execute = function() {
            console.log(`by Ship`);
        }

        return ShipStrategy;
    }
)();

const LandStrategy = (
    function() {
        function LandStrategy() {

        }

        LandStrategy.prototype.execute = function() {
            console.log(`by Land`);
        }

        return LandStrategy;
    }
)();


const strategies = new Strategy();
const ship = new ShipStrategy();
const land = new LandStrategy();
strategies.setStrategy(ship);
strategies.setStrategy(land);

strategies.execute();

