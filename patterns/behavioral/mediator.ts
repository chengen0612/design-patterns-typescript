class User {
  constructor(private chatRoom: ChatRoom, public name: string) {}

  sendMessage(message: string) {
    this.chatRoom.messageReceived(message, this);
  }

  receiveMessage(message: string, sender: User) {
    console.log(
      `${this.name} received message from ${sender.name}: ${message}`
    );
  }
}

class ChatRoom {
  private users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
    console.log(`${user.name} has joined the chat.`);
  }

  messageReceived(message: string, sender: User) {
    console.log(`${sender.name} sent message: ${message}`);

    this.users.forEach((user) => {
      if (user !== sender) {
        user.receiveMessage(message, sender);
      }
    });
  }
}

class Demo {
  static run() {
    const chatRoom = new ChatRoom();
    const user1 = new User(chatRoom, "Evans");
    const user2 = new User(chatRoom, "Howard");
    const user3 = new User(chatRoom, "Judy");

    chatRoom.addUser(user1);
    chatRoom.addUser(user2);
    chatRoom.addUser(user3);

    user1.sendMessage("Hello, everyone!");
    user2.sendMessage("Hi, Evans!");
    user2.sendMessage("Anyone want to drink tonight?");
    user3.sendMessage("Always have time for a drink!");
  }
}

export default Demo;
