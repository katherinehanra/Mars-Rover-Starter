const Rover = require("../rover.js");
const Message = require("../message.js");
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", function () {
  //TEST 7//
  test("constructor sets position and default values for mode and generatorWatts", function () {
    let rover = new Rover(98382);
    expect(rover.position).toBe(98382);
    expect(rover.mode).toBe("NORMAL");
    expect(rover.generatorWatts).toBe(110);
  });

  //TEST 8//
  test("response returned by receiveMessage contains the name of the message", function () {
    let command = [new Command("STATUS_CHECK")];
    let message = new Message("Test message with 1 command", command);
    let rover = new Rover();
    let response = rover.receiveMessage(message);
    expect(response.message).toBe("Test message with 1 command");
  });

  //TEST 9//
  test("response returned by receiveMessage includes two results if two commands are sent in the message", function () {
    let commands = [new Command("command"), new Command("command")];
    let message = new Message("message name", commands);
    expect(new Rover().receiveMessage(message).results.length).toBe(
      commands.length
    );
  });

  //TEST 10//
  test("responds correctly to the status check command", function () {
    let command = [new Command("STATUS_CHECK")];
    let message = new Message("status check", command);
    let rover = new Rover(1234);
    let response = rover.receiveMessage(message);
    expect(response.results[0].roverStatus.mode).toEqual("NORMAL");
    expect(response.results[0].roverStatus.generatorWatts).toEqual(110);
    expect(response.results[0].roverStatus.position).toBe(1234);
  });

  //TEST 11//
  test("responds correctly to the mode change command", function () {
    let command = [new Command("MODE_CHANGE")];
    let message = new Message("mode change message", command);
    let rover = new Rover();
    let response = rover.receiveMessage(message);
    expect(response.results[0].completed).toBe(true);
  });

  //TEST 12//
  test("responds with a false completed value when attempting to move in LOW_POWER mode", function () {
    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("MOVE", 12500),
    ];
    let message = new Message("mode change and move command message", commands);
    let rover = new Rover(20000);
    let response = rover.receiveMessage(message);
    console.log(response.results[1]);
    expect(response.results[1]).toStrictEqual({ completed: false });
  });

  //TEST 13//
  test("responds with the position for the move command", function () {
    let commands = [
      new Command("MODE_CHANGE", "NORMAL"),
      new Command("MOVE", 30000),
    ];
    let message = new Message("move command message", commands);
    let rover = new Rover(90000);
    let response = rover.receiveMessage(message);
    expect(rover.position).toBe(30000);
  });
});
