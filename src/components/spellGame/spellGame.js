import React from "react";
import EntryBox from "../entryBox/entryBox";
import ImageBox from "../imageBox/imageBox";
const InteractionBox = props => {
  const styles = {
    width: "90%",
    height: "80%",
    border: "1px solid black",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "slategray"
  };

  return (
    <div style={styles}>
      <ImageBox />
      <EntryBox />
    </div>
  );
};
export default InteractionBox;
