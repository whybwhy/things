/**
 * Mediator Pattern
 * - 활용 : 채팅 서버 역활
 */
var ChatServer = (function () {
    function ChatServer() {
        this.userList = [];
    }
    ChatServer.prototype.comeInto = function (user) {
        this.userList.push(user);
        console.log(user + "\uB2D8\uC774 \uC785\uC7A5\uD558\uC168\uC2B5\uB2C8\uB2E4.");
    };
    ChatServer.prototype.deliver = function (sender, message) {
        this.userList.forEach(function (user) {
            if (sender !== user)
                console.log(sender + "\uB2D8\uC774 " + user + "\uB2D8\uC5D0\uAC8C '" + message + "' \uB77C\uACE0 \uB9D0\uD569\uB2C8\uB2E4.");
        });
    };
    ChatServer.prototype.leave = function (user) {
        this.userList.splice(this.userList.indexOf(user), 1);
        console.log(this.userList);
    };
    return ChatServer;
})();
var chatServer = new ChatServer();
chatServer.comeInto("나뽀");
chatServer.comeInto("네뽕");
chatServer.comeInto("호호");
chatServer.deliver("나뽀", "안녕하세요");
chatServer.deliver("네뽕", "네뽕~");
chatServer.deliver("호호", "호호호호호호");
chatServer.comeInto("스타벅스");
chatServer.deliver("스타벅스", "아아 주세요");
chatServer.leave("스타벅스");
chatServer.deliver("나뽀", "안녕히 계세요!");
//# sourceMappingURL=pattern_mediator.js.map