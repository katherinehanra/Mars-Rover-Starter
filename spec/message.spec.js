const Message = require("../message.js");
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function () {
  //TEST 4//
  test("throws error if a name is NOT passed into the constructor as the first parameter", function () {
    expect(function () {
      new Message();
    }).toThrow(Error("Message name required."));
  });
  //TEST 5//
  test("constructor sets name", function () {
    let testName = new Message("name");
    expect(testName.messageName).toBe("name");
  });

  //TEST 6//
});
