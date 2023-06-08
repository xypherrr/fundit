import React from "react";
import { styled } from "styled-components";

const FlexContainer = styled.div`
  max-width: 1280px;
  margin: 0px auto;
`;

const Container = ({ children, className }) => {
  return (
    <FlexContainer className={`pR ${className || ""}`}>
      {children}
    </FlexContainer>
  );
};

export default Container;
