import React from "react";
import ProgressBox from "../progressBox/progressBox";
const ProgressContainer = props => {
  const styles = {
    width: "90%",
    height: "10%",
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: "lightsteelblue",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  return (
    <div style={styles}>
      <ProgressBox type="right" />
      <ProgressBox type="wrong" />
      <ProgressBox type="right" />
      <ProgressBox type="question" />
      <ProgressBox type="question" />
      <ProgressBox type="question" />
      <ProgressBox type="question" />
    </div>
  );
};

export default ProgressContainer;
