import React from "react";

export const MaxWidthContent = ({ children, style }) => (
  <div style={{ maxWidth: 1600, margin: "auto", ...style }}>{children}</div>
);
