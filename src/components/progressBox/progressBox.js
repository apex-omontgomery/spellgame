import React from "react";
import FontAwesome from "react-fontawesome";

const ProgressBox = props => {
  const styles = {
    margin: "10px",
    width: "10%",
    height: "80%",
    border: "1px solid black",
    boxShadow: "1px 1px red",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
  const iconStyle = {
    question: {
      backgroundColor: "white"
    },
    right: {
      backgroundColor: "green"
    },
    wrong: {
      backgroundColor: "orange"
    }
  };
  const iconType = {
    question: {
      // https://fontawesome.com/v4.7.0/icon/question/
      name: "question",
      size: "2x"
    },
    right: {
      //https://fontawesome.com/v4.7.0/icon/check/
      name: "check",
      size: "2x"
    },
    wrong: {
      //https://fontawesome.com/v4.7.0/icon/times/
      name: "times",
      size: "2x"
    }
  };

  return (
    <div style={{ ...styles, ...iconStyle[props.type] }}>
      <FontAwesome {...iconType[props.type]} />
    </div>
  );
};

export default ProgressBox;
