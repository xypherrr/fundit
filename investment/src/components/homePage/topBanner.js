import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Container from "../container/container";

const TopBannerWrapper = styled.div`
  & > div:first-child {
    padding: 227px 56px;
  }
  .topImage {
    border: 16px solid red;
    border-radius: 20px;
    transform: rotate(6deg);
  }
  background-image: url("/assets/homePage/top-banner-bg.svg");
  background-size: cover;
  @media only screen and (max-width: 767px) {
    & > div:first-child {
      padding: 62px 12px;
    }
    .topImage {
      border: 12px solid red;
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

const TopBanner = () => {
  return (
    <TopBannerWrapper>
      <Container className="dFA jcSB xfdC xtaC">
        <div>
          <p className="fs48 fwB mb24 xmb16">
            Invest In Loans <br /> and earn money
          </p>
          <p className="fs16 fwM mb40 xmb32 sub-heading">
            Invest in SMEs and make passive income.
          </p>
          <CustomButton className="dIB fs16 fwB mb40">
            HOW IT WORKS
          </CustomButton>
        </div>
        <div className="topImage ldN">
          <img src="/images/trim.jpg" width="240" height="140" />
        </div>
        <div className="topImage xdN">
          <img src="/images/trim.jpg" width="500" height="300" />
        </div>
      </Container>
    </TopBannerWrapper>
  );
};

export default TopBanner;
