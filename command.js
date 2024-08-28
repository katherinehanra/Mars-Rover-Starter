class Command {
  constructor(commandType, value) {
    this.commandType = commandType;
    if (!commandType) {
      throw Error("Command type is required.");
    }
    this.value = value;
  }
}

module.exports = Command;
