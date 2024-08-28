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
    let rover = new Rover(87382098);
    let response = rover.receiveMessage(message);
    expect(response.results[0].roverStatus.mode).toEqual("NORMAL");
    expect(response.results[0].roverStatus.generatorWatts).toEqual(110);
    expect(response.results[0].roverStatus.position).toEqual(87382098);
  });

  //TEST 11//
  //TEST 12//
  //TEST 13//
});
