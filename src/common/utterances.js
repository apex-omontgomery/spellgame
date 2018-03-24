const right = () => {
  let sound = new SpeechSynthesisUtterance("Success!");
  window.speechSynthesis.speak(sound);
};

const wrong = () => {
  let sound = new SpeechSynthesisUtterance("Try Again");
  window.speechSynthesis.speak(sound);
};

const spell = input => {
  let sound = new SpeechSynthesisUtterance(input.split(""));
  window.speechSynthesis.speak(sound);
};

const how = input => {
  let sound = new SpeechSynthesisUtterance(`How do you spell ${input}?`);
  window.speechSynthesis.speak(sound);
};

const word = input => {
  let sound = new SpeechSynthesisUtterance(input);
  window.speechSynthesis.speak(sound);
};
