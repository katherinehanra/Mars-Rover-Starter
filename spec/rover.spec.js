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
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.message).toEqual("Test message with 1 command");
    // let message = new Message("message content");
    // let roverTest = new Rover().receiveMessage(message);
    // expect(roverTest.message).toBe("message content");
  });

  //TEST 9//
  test("response returned by receiveMessage includes two results if two commands are sent in the message", function () {
    let commands = [new Command("MODE_CHANGE"), new Command("STATUS_CHECK")];
    let message = new Message("Test message with two commands", commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results.length).toEqual(2);
  });

  //TEST 10//
  test("responds correctly to the status check command", function () {
    let commands = [new Command("STATUS_CHECK")];
    let message = new Message("status check", commands);
    let rover = new Rover(75674);
    expect(rover.receiveMessage(message)).toBe({
      message: "message name",
      results: [
        {
          completed: true,
          roverStatus: { generatorWatts: 110, mode: "NORMAL", position: 75674 },
        },
      ],
    });
  });
  //TEST 11//
  //TEST 12//
  //TEST 13//
});
