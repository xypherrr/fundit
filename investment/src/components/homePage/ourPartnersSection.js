import React from "react";
import { styled } from "styled-components";
import Container from "../container/container";

const Wrapper = styled.div`
  & > div:first-child {
    padding: 100px 56px;
  }
  .partnersCard {
    max-height: 220px;
    padding: 60px;
    background: #f7f7f9;
    width: calc(100% / 2 - 72px / 2);
  }
  .partnersCardWrapper {
    padding: 0 120px;
    gap: 72px;
  }

  @media only screen and (max-width: 767px) {
    & > div:first-child {
      padding: 62px 12px;
    }
    .partnersCard {
      width: 100%;
      padding: 32px;
    }
    .partnersCardWrapper {
      padding: 0;
      gap: 48px;
    }
  }
`;

const OurPartnersSection = () => {
  return (
    <Wrapper>
      <Container className="dFA fdC">
        <p className="fs80 fwB mb100 xmb32">Our partners</p>
        <div className="dF fwW partnersCardWrapper">
          <div className="partnersCard taC">
            <img
              src="/assets/homePage/first-partner.svg"
              width="222"
              height="100"
            />
          </div>

          <div className="partnersCard taC">
            <img
              src="/assets/homePage/fits-partner.svg"
              width="222"
              height="100"
            />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default OurPartnersSection;
