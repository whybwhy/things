/**
 * Mediator Pattern
 * - 활용 : 채팅 서버 역활
 */
const ChatServer = (
    function() {

        function ChatServer() {
            this.userList = [];
        }

        ChatServer.prototype.comeInto = function(user) {
            this.userList.push(user);
            console.log(`${user}님이 입장하셨습니다.`);
        };

        ChatServer.prototype.deliver = function(sender, message) {
            this.userList.forEach(function(user) {
                if (sender !== user)
                    console.log(`${sender}님이 ${user}님에게 '${message}' 라고 말합니다.`);
            });
        };

        ChatServer.prototype.leave = function(user) {
            this.userList.splice(this.userList.indexOf(user), 1);
            console.log(this.userList);
        };

        return ChatServer;
    }
)();

const chatServer = new ChatServer();
chatServer.comeInto("나뽀");
chatServer.comeInto("네뽕");
chatServer.comeInto("호호");

chatServer.deliver("나뽀", "안녕하세요");
chatServer.deliver("네뽕", "네뽕~");
chatServer.deliver("호호", "호호호호호호");

chatServer.comeInto("스타벅스");
chatServer.deliver("스타벅스", "아아 주세요");
chatServer.leave("스타벅스");

chatServer.deliver("나뽀", "안녕히 계세요!")
