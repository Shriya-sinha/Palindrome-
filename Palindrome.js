var readline = require("readline");

const rl = readline.createInterface({

  input: process.stdin,

  output: process.stdout,

});

let userInput = "";

rl.question("Enter a palindrome\n", function (string) {

  userInput = string;

  const n = userInput.length;

  for (var i = 0; i < n / 2; i++) {

    if (userInput[i] !== userInput[n - 1 - i]) {

      console.log(userInput + " is not a Palindrome");

      rl.close();

      return;

    }

  }

  console.log(userInput + " is a Palindrome");

  rl.close();

});

