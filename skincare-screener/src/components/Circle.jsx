import React from "react";
import styled from "styled-components";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { RiInkBottleLine } from "react-icons/ri";
import { IconContext } from "react-icons";

const Circle = ({ rating }) => {
  const percentage = rating || 0;
  const colorThresholds = [75, 25];
  let COLOR =
    percentage > colorThresholds[0]
      ? "#9bd651"
      : percentage > colorThresholds[1]
      ? "orange"
      : "red";
  return (
    <div>
      <CircleWrapper>
        <CircularProgressbarWithChildren
          value={percentage}
          styles={buildStyles({
            strokeLinecap: "butt",
            pathTransitionDuration: 0.5,
            pathColor: COLOR,
          })}
        >
          <IconContext.Provider value={{ color: "grey" }}>
            <div>
              <RiInkBottleLine />
            </div>
          </IconContext.Provider>

          <div style={{ fontSize: 14, marginTop: -5 }}>
            <strong>{percentage}%</strong> match
          </div>
        </CircularProgressbarWithChildren>
      </CircleWrapper>
    </div>
  );
};

export default Circle;

const CircleWrapper = styled.div`
  width: 110px;
  height: 110px;
`;
