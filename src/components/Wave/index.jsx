import React from "react";
import { ShapeWrapper, Shape } from "./styles";

export const Wave = ({ color, isInverted = true, style, bgColor }) => (
  <div
    style={{
      width: "100%",
      zIndex: 5,
      ...style,
    }}
  >
    <ShapeWrapper isInverted={isInverted} style={{ backgroundColor: bgColor }}>
      <Shape viewBox="0 0 1600 181.67">
        <path
          d="M0,83s377-186,800,0,740,31,800,0c-1,65,0,99,0,99H0Z"
          transform="translate(0 -0.33)"
          style={{ stroke: "none", fill: color }}
        />
      </Shape>
    </ShapeWrapper>
  </div>
);
