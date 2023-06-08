import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Container from "../container/container";

const Wrapper = styled.div`
  & > div:first-child {
    padding: 227px 56px;
  }
  .laptopImage {
    border-radius: 50%;
  }
  .imageHelper {
    border-radius: 50%;
    background: #26c296;
    color: #fff;
    height: 220px;
    width: 220px;
    top: 205px;
    right: 250px;
  }
  .title {
    color: #182d54;
  }
  .desc {
    color: #01274c;
  }
  .topImage {
    margin-bottom: 150px;
  }
  @media only screen and (max-width: 767px) {
    & > div:first-child {
      padding: 62px 12px;
    }
    .imageHelper {
      height: 140px;
      width: 140px;
      top: 184px;
      right: 130px;
    }
    .topImage {
      margin-bottom: 100px;
    }
  }
`;

const EveryStepSection = () => {
  return (
    <Wrapper>
      <Container className="dFA jcC fdC taC">
        <div className="pR mb150 topImage">
          <div className="laptopImage xdN">
            <img
              src="/assets/homePage/every-step-laptop.svg"
              height="350"
              width="350"
            />
          </div>
          <div className="laptopImage ldN">
            <img
              src="/assets/homePage/every-step-laptop.svg"
              height="250"
              width="250"
            />
          </div>
          <div className="dFA jcC fdC taC pA fwM imageHelper">
            <span className="fs48 fwB">15</span>
            <p className="fs28">years of experience</p>
          </div>
        </div>
        <p className="fs80 fwB mb48 xmb32 title">
          We Help at Every Step From Concept to Market
        </p>
        <p className="fs28 desc">
          SME financing, banking, investment management experience, our team
          helps retail investors tap into the P2B lending market and make
          passive income. We carefully assess SMEs and ensure that only
          qualified businesses can borrow through our platform.
        </p>
      </Container>
    </Wrapper>
  );
};

export default EveryStepSection;
