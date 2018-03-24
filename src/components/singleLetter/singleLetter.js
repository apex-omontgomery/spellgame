import React from "react";

const SingleLetter = props => {
  const styles = {
    margin: "10px 20px 20px 20px",
    //width: "90%",
    //height: "20%",
    borderBottom: "1px solid black",
    textAlign: "center",
    fontSize: "40px"
  };
  const letter = props.char ? props.char : "";
  const character = () => {
    let sound = new SpeechSynthesisUtterance(letter);
    window.speechSynthesis.speak(sound);
  };
  return props.char ? (
    <p style={styles} onClick={character}>
      {" "}
      {props.char}
    </p>
  ) : (
    <p style={styles}>&nbsp;</p>
  );
};

export default SingleLetter;
