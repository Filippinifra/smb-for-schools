import styled from "styled-components";

export const ShapeWrapper = styled.div`
  display: grid;
  width: 100%;
  vertical-align: middle;
  overflow: hidden;
  transform: ${({ isInverted }) =>
    isInverted ? "scale(1, 1)" : "scale(1, -1)"};
`;

export const Shape = styled.svg`
  display: inline-block;
  top: 0;
  left: 0;
`;
