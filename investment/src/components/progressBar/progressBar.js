import React from "react";
import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  background-color: #bcbcbc;
`;

const StyledBar = styled.div`
  background-color: green;
  height: 4px;
  width: 10%;
  /* ${({ completed }) => {
    completed &&
      css`
        width: ${completed}%;
      `;
  }} */
`;

const ProgressBar = ({ className, completed }) => {
  console.log({ completed });
  return (
    <StyledDiv className={className}>
      <StyledBar completed={completed} />
    </StyledDiv>
  );
};

export default ProgressBar;
