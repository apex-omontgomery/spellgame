import React from "react";
import SingleLetter from "../singleLetter/singleLetter";
const EntryBox = props => {
  const styles = {
    margin: "10px 20px 20px 20px",
    width: "90%",
    height: "20%",
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: "lightsteelblue",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "monospace"
  };

  return (
    <div style={styles}>
      <SingleLetter char="P" />
      <SingleLetter char="L" />
      <SingleLetter char="A" />
      <SingleLetter char="Y" />
      <SingleLetter char="G" />
      <SingleLetter />
      <SingleLetter />
      <SingleLetter />
      <SingleLetter />
      <SingleLetter />
    </div>
  );
};

export default EntryBox;
