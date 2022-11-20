import React from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Circle = () => {
  const percentage = 78;
  return (
    <div>
      <CircleWrapper>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            // rotation: 0.25,
            strokeLinecap: "butt",
            textSize: "1.8em",
            pathTransitionDuration: 0.5,

            textColor: "#0a7cff",

            backgroundColor: "ightblue",
          })}
        />
      </CircleWrapper>
    </div>
  );
};

export default Circle;

const CircleWrapper = styled.div`
  // background: lightblue;
  // border: solid #0a7cff 1px;
  // border-radius: 50%;
  width: 100px;
  height: 100px;

  // display: flex;
  // align-items: center;
  // justify-content: center;
`;

const PercentageWrapper = styled.div`
  font-weight: 700;
  font-size: 1.8em;
  color: #0a7cff;
`;