class Message {
  constructor(messageName, commands) {
    if (!messageName) {
      throw Error("Message name required.");
    }
    this.messageName = messageName;
    this.commands = commands;
  }
}

module.exports = Message;
