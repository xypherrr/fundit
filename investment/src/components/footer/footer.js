import React from "react";
import Container from "../container/container";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const FooterWrapper = styled.div`
  background: #182d54;
  color: #fff;
  & > div:first-child {
    padding: 100px 56px;
    gap: 150px;
  }
  .ml12 {
    margin-left: 12px;
  }

  @media only screen and (max-width: 767px) {
    & > div:first-child {
      padding: 62px 24px;
      gap: 32px;
    }
    .xw100 {
      width: 100%;
    }
  }
`;

const FooterLinks = styled(Link)`
  color: #fff;
  &:hover {
    font-weight: bold;
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container className="dF fwW">
        <div>
          <div className="dFA mb32">
            <img src="/assets/icon/fundt-icon-logo.svg" />
            <p className="ml12">FUNDT</p>
          </div>
        </div>
        <div className="dF fdC xw100">
          <p className="mb24">Borrow</p>
          <FooterLinks className="mb18">
            <a>Cases</a>
          </FooterLinks>
          <FooterLinks className="mb18">
            <a>How it works</a>
          </FooterLinks>
          <FooterLinks className="mb18">
            <a>Loan type</a>
          </FooterLinks>
          <FooterLinks className="mb18">
            <a>Get a quote</a>
          </FooterLinks>
        </div>
        <div className="dF fdC xw100">
          <p className="mb24">Invest</p>
          <FooterLinks className="mb18">
            <a>Cases</a>
          </FooterLinks>
          <FooterLinks className="mb18">
            <a>How it works</a>
          </FooterLinks>
          <FooterLinks className="mb18">
            <a>Tax-free investing</a>
          </FooterLinks>
          <FooterLinks className="mb18">
            <a>Calculator</a>
          </FooterLinks>
        </div>
        <div className="dF fdC xw100">
          <p className="mb24">About us</p>
          <FooterLinks className="mb18">
            <a>User&apos;s Terms & Conditions</a>
          </FooterLinks>
          <FooterLinks className="mb18">
            <a>Risk Statement</a>
          </FooterLinks>
          <FooterLinks className="mb18">
            <a>About FundT</a>
          </FooterLinks>
          <FooterLinks className="mb18">
            <a>Statistics</a>
          </FooterLinks>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
