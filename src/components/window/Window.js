import React from "react";
import InteractionBox from "../spellGame/spellGame";
import ProgressContainer from "../progress/progress";
const fullDiv = {
  width: "100",
  height: "100",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "slategray"
};

const innerDiv = {
  width: "30%",
  height: "60%",
  margin: "0px",
  border: "2px solid black",
  borderRadius: "15px",
  backgroundColor: "steelblue",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around"
};

const Window = () => (
  <div style={fullDiv}>
    <div style={innerDiv}>
      <ProgressContainer />
      <InteractionBox />
    </div>
  </div>
);

export default Window;
