import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Container from "../container/container";

const Wrapper = styled.div`
  & > div:first-child {
    padding: 100px 56px;
  }
  background: #f7f7f9;
  .leftSection {
    width: 50%;
  }
  .blueSection {
    height: 100vh;
    background: #182d54;
  }
  .w30 {
    width: 30%;
  }
  .investImageWrapper {
    right: 150px;
    bottom: 0;
  }

  @media only screen and (max-width: 767px) {
    & > div:first-child {
      padding: 62px 12px;
    }
    .leftSection {
      width: 100%;
    }
  }
`;

const CustomButton = styled(Link)`
  color: #fff;
  background: #26c296;
  border-radius: 50px;
  padding: 18px 40px;
  border: none;
`;

const InvestCapitalSection = () => {
  return (
    <Wrapper>
      <Container className="dFA jcSB xfdC">
        <div className="xtaC leftSection">
          <p className="fs80 fwB mb40 xmb32">Invest or raise capital</p>
          <p className="fs28 mb64 xmb32">
            You can register as a lender or send us your pitch to get a quote
            and borrow money.
          </p>
          <CustomButton className="dIB fs16 fwB mb40">Register</CustomButton>
        </div>
        <div className="ldN investImageWrapper">
          <img src="/assets/homePage/invest-capital.svg" width="300" />
        </div>
        <div className="pR w30 xdN">
          <div className="pA investImageWrapper">
            <img src="/assets/homePage/invest-capital.svg" width="400" />
          </div>
          <div className="blueSection "></div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default InvestCapitalSection;
