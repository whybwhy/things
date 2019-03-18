var TodoList = (
    function() {
        function TodoList(list) {
            this.list = list;
            this.index = 0;
        }

        TodoList.prototype.next = function() {
            //console.log(this);
            //this.list[this.index].call(null);
            this.list[this.index](); // 동일 기능

            this.index ++;
        }

        TodoList.prototype.done = function() {
            return this.list.length === this.index;
        }


        TodoList.prototype.thisTest = function() {
            //console.log(this);
            console.log('hahahahah');
        }

        return TodoList;
    }
)();

function function_0() {
    console.log('this is function_0')
}

function function_1() {
    console.log('this is function_1')
}

function function_2() {
    console.log('this is function_2')
}

var todoList = new TodoList([function_0, function_1, function_2]);
todoList.next();
todoList.next();
todoList.done();
console.log(todoList.done());
todoList.next();
console.log(todoList.done());
//todoList.next();
//console.log(todoList.done());
//new TodoList().thisTest.call(null)   // Window
//todoList.thisTest();    // TODOLIST
//todoList.thisTest.call(null);   // window
