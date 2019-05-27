const guess = document.getElementById("guess");
const button = document.getElementById("button");
const result = document.getElementById("result");

button.addEventListener("click", function() {
  const coinToss = Math.floor(Math.random() * 2 + 1);
  let guessValue;
  if (guess.value == "heads") {
    guessValue = 1;
  } else if (guess.value == "tails") {
    guessValue = 2;
  } else {
    result.innerHTML = "Please enter heads or tails";
  }

  function resultFinder() {
    if (coinToss === 1) {
      return "heads";
    }
    return "tails";
  }

  if (guessValue === coinToss) {
    result.innerHTML =
      "The result was " + resultFinder() + ". You guessed correct";
  } else if (guessValue != 2 && guessValue != 1) {
    result.innerHTML = "Please enter heads or tails";
  } else {
    result.innerHTML =
      "The result was " + resultFinder() + ". Sorry, your guess was incorrect";
  }
});
