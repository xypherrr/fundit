import React, { useState } from "react";
import { useForm } from "react-hook-form";

import styled from "styled-components";
import { Link } from "react-router-dom";
import TextField from "../components/textField/textField";
import Container from "../components/container/container";
import ProgressBar from "../components/progressBar/progressBar";
import TopBanner from "../components/homePage/topBanner";
import EveryStepSection from "../components/homePage/everyStep";
import LandingPlatformSection from "../components/homePage/landingPlatformSection";
import InvestCapitalSection from "../components/homePage/investCapitalSection";
import ChooseUsSection from "../components/homePage/chooseUsSection";
import InvestmentPackagesSection from "../components/homePage/investmentPackages";
import OurPartnersSection from "../components/homePage/ourPartnersSection";
import FAQSection from "../components/homePage/faqSection";
import CarouselComponent from "../components/carouselComponent/carouselComponent";

const Wrapper = styled.div`
  /* padding: 100px; */

  .sub-heading {
    color: #7b90b7;
  }
  .topSection {
    border: 1px solid red;
    margin-bottom: 200px;
    background-image: url("/assets/home-about-bg.svg") no-repeat center;
    background-size: cover;
  }
  .cBlue {
    color: #7b90b7;
  }
  .ml32 {
    margin-left: 32px;
  }
  .lh24 {
    line-height: 24px;
  }
  .mb200 {
    margin-bottom: 200px;
  }
  .redLine {
    width: 6%;
    border: 5px solid red;
  }
  @media only screen and (max-width: 767px) {
    .xtaC {
      text-align: center;
    }

    .xfdC {
      flex-direction: column;
    }
    .xfdCR {
      flex-direction: column-reverse;
    }
  }
`;

const BenefitsRemoteWorkersSection = styled.div`
  & > div:first-child {
    padding: 100px 104px;
  }
  background: #f7f7f9;
  @media only screen and (max-width: 767px) {
    & > div:first-child {
      padding: 62px 12px 20px;
    }
    p {
      text-align: center;
    }
  }
`;

const ContactUsSection = styled.div`
  & > div:first-child {
    padding: 100px 56px;
  }
  .contactDetails {
    padding: 100px 80px;
    background: #26c296;
    color: #fff;
  }
  .cfff {
    color: #fff;
  }
  @media only screen and (min-width: 768px) {
  }
  .mr40 {
    margin-right: 40px;
  }
  @media only screen and (max-width: 767px) {
    & > div:first-child {
      padding: 62px 12px;
    }
    .contactDetails {
      padding: 32px 24px;
      margin-bottom: 32px;
    }
  }
`;

const FieldWrapper = styled.div`
  width: calc(100% / 2 - 34px / 2);
  p {
    font-size: 16px;
  }
  input {
    background: #f7f7f9;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

const ContactForm = styled.form`
  width: 48%;
  gap: 34px;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

const ContactLinks = styled(Link)`
  a {
    color: #fff;
  }
`;

const CustomTextArea = styled.textarea`
  width: 100%;
  background: #f7f7f9;
  border: none;
`;

const SendButton = styled.button`
  color: #fff;
  background: #26c296;
  border-radius: 50px;
  padding: 18px 40px;
  border: none;
`;

const ExploreOpportunitiesSection = styled.div``;
const OpportunityCard = styled.div`
  .cardDetailsSection {
    padding: 40px;
  }
`;

export const benefitsRemoteWorkers = {
  data: [
    {
      src: "quality-talent.svg",
      width: 88,
      height: 92,
      alt: "Quality Talent",
      title: "Higher Quality Talent",
      description:
        "You have access to the global talent pool hence you can select the best",
    },
    {
      src: "fast-availability.svg",
      width: 104,
      height: 92,
      alt: "Fast Availability",
      title: "Easy & Fast Availability",
      description:
        "You can overcome talent shortages that you often run into while hiring locally",
    },
    {
      src: "high-productivity.svg",
      width: 126,
      height: 92,
      alt: "High Productivity",
      title: "Higher Productivity",
      description:
        "Study after study has shown that remote work increases talent productivity",
    },
    {
      src: "lower-cost.svg",
      width: 78,
      height: 92,
      alt: "Lower Cost",
      title: "Lower Cost",
      description:
        "Get ready to be amazed at the cost differences for the same skill around the world",
    },
    {
      src: "diverse-team.svg",
      width: 92,
      height: 92,
      alt: "Diverse Team",
      title: "Diverse Team",
      description:
        "The more you hire across the border, the more diverse your team becomes",
    },
    {
      src: "global-reach.svg",
      width: 94,
      height: 92,
      alt: "Global Reach",
      title: "Global Reach",
      description:
        "Global teams, due to their broader exposure, also find it easier to expand into new markets",
    },
  ],
  minHeight: 92,
  minWidth: 126,
  mSiteMinHeight: 97,
  mSiteMinWidth: 126,
  mSiteSize: 65,
};

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
  };

  return (
    <Wrapper className="font-link">
      <TopBanner />
      <EveryStepSection />
      <LandingPlatformSection />
      <InvestCapitalSection />
      <ChooseUsSection />

      <BenefitsRemoteWorkersSection>
        <Container>
          <CarouselComponent
            // carouselItems={benefitsRemoteWorkers}
            lastIdx={1}
            tabLastIdx={2}
            elementWidth={33}
            singleRowMsite
          >
            {/* <ExploreOpportunitiesSection>
              <Container> */}
            <div className="dF itemsWrapper">
              <OpportunityCard className="eachItem">
                {/* <div>
                  <img src="/assets/homePage/explore-opprtunities-01.svg" />
                </div> */}
                <div className="cardDetailsSection">
                  <div className="fs20 fwSB mb32 cardButton">FILM & VIDEOS</div>
                  <p className="fs32 fwB mb32">
                    British Wildlife Illustrated Gift Wrap
                  </p>
                  <div>
                    <div className="dF jcSB mb12">
                      <p>Raised: $3,600</p>
                      <p>24%</p>
                    </div>
                    <ProgressBar className="mb12" completed="10" />
                    <p>Goal: $15,000</p>
                  </div>
                </div>
              </OpportunityCard>
              <OpportunityCard className="eachItem">
                {/* <div>
                  <img src="/assets/homePage/explore-opprtunities-01.svg" />
                </div> */}
                <div className="cardDetailsSection">
                  <div className="fs20 fwSB mb32 cardButton">FILM & VIDEOS</div>
                  <p className="fs32 fwB mb32">
                    British Wildlife Illustrated Gift Wrap
                  </p>
                  <div>
                    <div className="dF jcSB mb12">
                      <p>Raised: $3,600</p>
                      <p>24%</p>
                    </div>
                    <ProgressBar className="mb12" completed="10" />
                    <p>Goal: $15,000</p>
                  </div>
                </div>
              </OpportunityCard>
              <OpportunityCard className="eachItem">
                {/* <div>
                  <img src="/assets/homePage/explore-opprtunities-01.svg" />
                </div> */}
                <div className="cardDetailsSection">
                  <div className="fs20 fwSB mb32 cardButton">FILM & VIDEOS</div>
                  <p className="fs32 fwB mb32">
                    British Wildlife Illustrated Gift Wrap
                  </p>
                  <div>
                    <div className="dF jcSB mb12">
                      <p>Raised: $3,600</p>
                      <p>24%</p>
                    </div>
                    <ProgressBar className="mb12" completed="10" />
                    <p>Goal: $15,000</p>
                  </div>
                </div>
              </OpportunityCard>
              <OpportunityCard className="eachItem">
                {/* <div>
                  <img src="/assets/homePage/explore-opprtunities-01.svg" />
                </div> */}
                <div className="cardDetailsSection">
                  <div className="fs20 fwSB mb32 cardButton">FILM & VIDEOS</div>
                  <p className="fs32 fwB mb32">
                    British Wildlife Illustrated Gift Wrap
                  </p>
                  <div>
                    <div className="dF jcSB mb12">
                      <p>Raised: $3,600</p>
                      <p>24%</p>
                    </div>
                    <ProgressBar className="mb12" completed="10" />
                    <p>Goal: $15,000</p>
                  </div>
                </div>
              </OpportunityCard>
              <OpportunityCard className="eachItem">
                {/* <div>
                  <img src="/assets/homePage/explore-opprtunities-01.svg" />
                </div> */}
                <div className="cardDetailsSection">
                  <div className="fs20 fwSB mb32 cardButton">FILM & VIDEOS</div>
                  <p className="fs32 fwB mb32">
                    British Wildlife Illustrated Gift Wrap
                  </p>
                  <div>
                    <div className="dF jcSB mb12">
                      <p>Raised: $3,600</p>
                      <p>24%</p>
                    </div>
                    <ProgressBar className="mb12" completed="10" />
                    <p>Goal: $15,000</p>
                  </div>
                </div>
              </OpportunityCard>
            </div>

            {/* </Container>
            </ExploreOpportunitiesSection> */}
          </CarouselComponent>
        </Container>
      </BenefitsRemoteWorkersSection>
      {/* <ExploreOpportunitiesSection>
        <Container className="dF jcC">
          <p className="fs80 fwB">Explore Opportunities</p>
          <OpportunityCard>
            <div>
              <img src="/assets/homePage/explore-opprtunities-01.svg" />
            </div>
            <div className="cardDetailsSection">
              <div className="fs20 fwSB mb32 cardButton">FILM & VIDEOS</div>
              <p className="fs32 fwB mb32">
                British Wildlife Illustrated Gift Wrap
              </p>
              <div>
                <div className="dF jcSB mb12">
                  <p>Raised: $3,600</p>
                  <p>24%</p>
                </div>
                <ProgressBar className="mb12" completed="10" />
                <p>Goal: $15,000</p>
              </div>
            </div>
          </OpportunityCard>
        </Container>
      </ExploreOpportunitiesSection> */}
      <ContactUsSection>
        <Container>
          <p className="fs80 fwB mb100 xmb32">Contact Us</p>
          <div className="dF jcSB xfdC">
            <div className="contactDetails">
              <div className="dF fdC">
                <div className="dFA mr40 mb64">
                  <div className="mr40">
                    <img src="/assets/icon/call-icon.svg" />
                  </div>
                  <ContactLinks className="fwB cfff">
                    <a href="tel:+968 77318197">+968 77318197</a>
                  </ContactLinks>
                </div>
                <div className="dFA mb64">
                  <div className="mr40">
                    <img src="/assets/icon/mail-icon.svg" />
                  </div>
                  <ContactLinks className="fwB cfff">
                    <a mailto="admin@fundt.om">admin@fundt.om</a>
                  </ContactLinks>
                </div>
                <div className="dFA">
                  <div className="mr40">
                    <img src="/assets/icon/location-icon.svg" />
                  </div>
                  <ContactLinks className="fwB cfff">
                    <a>Muscat, Busher</a>
                  </ContactLinks>
                </div>
              </div>
            </div>
            <ContactForm
              onSubmit={handleSubmit(onSubmit)}
              className="dF fwW xfdC"
            >
              <FieldWrapper className="fwB">
                <p className="mb16">Name</p>
                <TextField
                  className="field"
                  id="user"
                  label="Name"
                  type="text"
                  name="name"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Name is required",
                    minLength: {
                      value: 3,
                      message: "Please enter a minimum of 3 characters",
                    },
                  }}
                  required
                />
              </FieldWrapper>
              <FieldWrapper className="fwB">
                <p className="mb16">E- mail</p>
                <TextField
                  className="field"
                  id="email"
                  label="Email"
                  type="email"
                  name="email"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Email is required",
                    pattern: {
                      value: new RegExp(
                        /^([A-Za-z0-9_\-.])+@\w{2,}\.\w{2,}(\.\w{2,})?$/
                      ),
                      message: "Please enter a valid emial",
                    },
                  }}
                  required
                />
              </FieldWrapper>
              <FieldWrapper className="fwB">
                <p className="fs16 mb16">Phone</p>
                <TextField
                  className="field"
                  id="mobileNumber"
                  label="+968-xxxxxxxx"
                  type="number"
                  min="0"
                  name="mobileNumber"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Mobile Number is required",
                    validate: {
                      pattern: (value) =>
                        value.trim() && !value.match(/^[+0-9()\s-]{6,15}$/)
                          ? "Please enter a valid phone number"
                          : true,
                    },
                  }}
                  required
                />
              </FieldWrapper>
              <FieldWrapper className="fwB">
                <p className="mb16">Topic</p>
                <TextField
                  className="field"
                  id="topic"
                  label="Topic"
                  type="text"
                  name="topic"
                  errors={errors}
                  register={register}
                  validationSchema={{
                    required: "Topic is required",
                    minLength: {
                      value: 3,
                      message: "Please enter a minimum of 3 characters",
                    },
                  }}
                  required
                />
              </FieldWrapper>
              <CustomTextArea
                type="input"
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
              ></CustomTextArea>

              <SendButton className="fs16 fwB mb40" type="submit">
                Send
              </SendButton>
            </ContactForm>
          </div>
        </Container>
      </ContactUsSection>
      <InvestmentPackagesSection />
      <OurPartnersSection />
      <FAQSection />
    </Wrapper>
  );
};

export default Home;
