const Problem = (function Problem() {
    function Problem() {

    }

    Problem.prototype.solve = function() {
        console.log("Hello World!")
    };

    return Problem;
})();

{
    let problem = new Problem();
    problem.solve();
}
