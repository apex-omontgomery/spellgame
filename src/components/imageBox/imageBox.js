import React from "react";
import image from "../../images/words/playground.jpg";
const ImageBox = props => {
  const styles = {
    margin: "20px 20px 10px 20px",
    width: "90%",
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: "lightsteelblue",
    overflow: "hidden"
  };

  const type = "playground";

  const imgStyle = {
    flexShrink: "0",
    minWidth: "100%",
    minHeight: "100%"
  };

  const how = () => {
    let sound = new SpeechSynthesisUtterance(`How do you spell playground?`);
    window.speechSynthesis.speak(sound);
  };
  return (
    <div style={styles} onClick={how}>
      <img src={image} style={imgStyle} alt="playground" />
    </div>
  );
};

export default ImageBox;
