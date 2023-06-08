import React from "react";
import { styled } from "styled-components";
import Container from "../container/container";

const Wrapper = styled.div`
  & > div:first-child {
    padding: 100px 56px;
  }
  .cardsWrapper {
    gap: 100px;
  }
  .chooseUsCard {
    padding: 60px;
    background: #f7f7f9;
    width: calc(100% / 2 - 100px / 2);
  }
  @media only screen and (max-width: 767px) {
    & > div:first-child {
      padding: 62px 12px;
    }
    .chooseUsCard {
      padding: 32px 18px;
      width: 100%;
    }
    .cardsWrapper {
      gap: 48px;
    }
  }
`;

const whyChooseUsDetails = [
  {
    src: "why-choose-us-01.svg",
    title: "Accessibility",
    desc: "We work with retail and institutional lenders with a minimum amount of RO500.",
  },
  {
    src: "why-choose-us-02.svg",
    title: "Reliable Projects",
    desc: "We carefully select every project because your success id our success.",
  },
  {
    src: "why-choose-us-03.svg",
    title: "Cross-border investing",
    desc: "We work with international and local lenders and borrowers.",
  },
  {
    src: "why-choose-us-04.svg",
    title: "Rewarding returns",
    desc: "You can expect potential returns of 6-12% a year depending on the projects.",
  },
];

const ChooseUsSection = () => {
  return (
    <Wrapper>
      <Container className="dFA fdC xtaC">
        <p className="fs80 fwB mb100 xmb32">Why choose us?</p>
        <div className="dF fwW cardsWrapper">
          {whyChooseUsDetails.map((item, index) => {
            return (
              <div key={index} className="chooseUsCard">
                <div className="mb32">
                  <img src={`/assets/homePage/${item.src}`} />
                </div>
                <p className="fs40 fwB mb24">{item.title}</p>
                <p className="fs20">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Wrapper>
  );
};

export default ChooseUsSection;
