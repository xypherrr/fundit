import React from "react";
import { styled } from "styled-components";
import Container from "../container/container";

const Wrapper = styled.div`
  background: #f7f7f9;

  & > div:first-child {
    padding: 100px 56px;
  }
  .greenImgeWrapper {
    padding: 24px 20px;
    border-radius: 20px;
    background: #26c29624;
  }
  .investmentCardWrapper {
    gap: 36px;
  }
  .investmentCard {
    background: #fff;
    padding: 110px 48px;
    width: calc(100% / 3 - 72px / 3);
  }
  .investmentImageWrapper {
    width: 85%;
  }
  .costButton {
    width: 85%;
    margin-bottom: 50px;
    background: #26c296;
    color: #fff;
    border-radius: 8px;
    padding: 20px 100px;
  }
  .cardText {
    border-top: 1px solid #0000004d;
  }
  .cardText > p:first-child {
    margin-top: 32px;
  }
  @media only screen and (max-width: 767px) {
    & > div:first-child {
      padding: 62px 12px;
    }
    .investmentCard {
      padding: 48px 16px;
      width: 100%;
    }
  }
`;

const InvestmentPackagesDetails = [
  {
    srcOne: "investment-packages-01.svg",
    srcTwo: "investment-packages-02.svg",
    cost: "RO500",
    title: "Conservative",
    desc: "Minimum risk, debt investment options for those who want steady and predictable returns.",
  },
  {
    srcOne: "investment-packages-03.svg",
    srcTwo: "investment-packages-04.svg",
    cost: "RO5,000",
    title: "Balanced",
    desc: "A balanced portfolio of debt and equity investments which is properly diversified.",
  },
  {
    srcOne: "investment-packages-05.svg",
    srcTwo: "investment-packages-06.svg",
    cost: "RO10,000",
    title: "Advanced",
    desc: "An aggressive investing package with the maximum returns over ling and short periods.",
  },
];

const InvestmentPackagesSection = () => {
  return (
    <Wrapper>
      <Container className="dFA fdC">
        <p className="fs80 xfS24 fwB mb100 xmb32">Investment Packages</p>
        <div className="dF fwW investmentCardWrapper">
          {InvestmentPackagesDetails.map((item, index) => {
            // provide key prop to all maps
            return (
              <div className="dFA fdC investmentCard" key={index}>
                <div className="dF jcSB mb64 investmentImageWrapper">
                  <div className="dFA jcC greenImgeWrapper">
                    <img
                      src={`/assets/homepage/${item.srcOne}`}
                      width="50"
                      height="50"
                    />
                  </div>
                  <div className="dFA jcC greenImgeWrapper">
                    <img
                      src={`/assets/homepage/${item.srcTwo}`}
                      width="50"
                      height="50"
                    />
                  </div>
                </div>
                <div className="dFA jcC fdC costButton taC">
                  <p>{item.cost}</p>
                  <p>Cost</p>
                </div>
                <div className="dF jcFS fdC cardText">
                  <p className="fs32 fwB mb24">{item.title}</p>
                  <p className="fs20">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Wrapper>
  );
};

export default InvestmentPackagesSection;
