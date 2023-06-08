import React from "react";
import { styled } from "styled-components";
import Container from "../container/container";

const Wrapper = styled.div`
  & > div:first-child {
    padding: 100px 56px;
  }
  .iconElement {
    margin-right: 64px;
  }
  .iconLine {
    border: 2px solid #26c296;
    opacity: 10%;
    margin-top: 12px;
    height: 165px;
    left: 47px;
    border-radius: 20px;
  }
  .rightImage {
    width: 400px;
  }

  .mb140 {
    margin-bottom: 140px;
  }
  .cardText {
    min-height: 150px;
  }
  @media only screen and (min-width: 768px) {
    .leftSection {
      width: 50%;
    }
  }
  @media only screen and (max-width: 767px) {
    & > div:first-child {
      padding: 62px 12px;
    }
    .iconElement {
      margin-right: 32px;
    }
    .cardText {
      min-height: 250px;
    }
    .iconLine {
      height: 160px;
    }
    .mb140 {
      margin-bottom: 32px;
    }
  }
`;

const LandingPlatformSection = () => {
  return (
    <Wrapper>
      <Container>
        <p className="fs80 fwB mb100">
          How to get started on our P2P landing platform
        </p>
        <div className="dF jcSB xfdC">
          <div className="leftSection">
            <div className="dF mb140">
              <div className="pR iconElement">
                {/* add alt tag for all images */}
                {/* <img src="/assets/homePage/landing-platform-01.svg" /> */}
                <div
                  style={{
                    backgroundColor: "#26C296",
                    opacity: "20%",
                    height: "100px",
                    width: "100px",
                    borderRadius: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div>
                    <svg
                      width="52"
                      height="57"
                      viewBox="0 0 52 57"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 5.7C22.9353 5.7 19.9961 6.90107 17.829 9.03898C15.6619 11.1769 14.4444 14.0765 14.4444 17.1C14.4444 20.1235 15.6619 23.0231 17.829 25.161C19.9961 27.2989 22.9353 28.5 26 28.5C29.0647 28.5 32.0039 27.2989 34.171 25.161C36.3381 23.0231 37.5556 20.1235 37.5556 17.1C37.5556 14.0765 36.3381 11.1769 34.171 9.03898C32.0039 6.90107 29.0647 5.7 26 5.7ZM8.66667 17.1C8.66667 12.5648 10.4929 8.21535 13.7435 5.00847C16.9941 1.8016 21.4029 0 26 0C30.5971 0 35.0059 1.8016 38.2565 5.00847C41.5071 8.21535 43.3333 12.5648 43.3333 17.1C43.3333 21.6352 41.5071 25.9847 38.2565 29.1915C35.0059 32.3984 30.5971 34.2 26 34.2C21.4029 34.2 16.9941 32.3984 13.7435 29.1915C10.4929 25.9847 8.66667 21.6352 8.66667 17.1ZM14.4444 45.6C12.1459 45.6 9.9415 46.5008 8.31619 48.1042C6.69087 49.7077 5.77778 51.8824 5.77778 54.15C5.77778 54.9059 5.47341 55.6308 4.93164 56.1653C4.38987 56.6997 3.65507 57 2.88889 57C2.12271 57 1.38791 56.6997 0.846136 56.1653C0.304364 55.6308 0 54.9059 0 54.15C0 50.3707 1.52182 46.7461 4.23068 44.0737C6.93954 41.4013 10.6135 39.9 14.4444 39.9H37.5556C41.3865 39.9 45.0605 41.4013 47.7693 44.0737C50.4782 46.7461 52 50.3707 52 54.15C52 54.9059 51.6956 55.6308 51.1539 56.1653C50.6121 56.6997 49.8773 57 49.1111 57C48.3449 57 47.6101 56.6997 47.0684 56.1653C46.5266 55.6308 46.2222 54.9059 46.2222 54.15C46.2222 51.8824 45.3091 49.7077 43.6838 48.1042C42.0585 46.5008 39.8541 45.6 37.5556 45.6H14.4444Z"
                        fill="#2648C2"
                      />
                    </svg>
                  </div>
                </div>
                <div className="pA iconLine"></div>
              </div>
              <div className="cardText">
                <p className="fs36 fwB mb24">Register</p>
                <p className="fs24">
                  To get started, you have to pass the verification process and
                  get approved.
                </p>
              </div>
            </div>

            <div className="dF mb140">
              <div className="pR iconElement">
                {/* add alt tag for all images */}
                {/* <img src="/assets/homePage/landing-platform-01.svg" /> */}
                <div
                  style={{
                    backgroundColor: "#26C296",
                    opacity: "20%",
                    height: "100px",
                    width: "100px",
                    borderRadius: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 50 50"
                      width="50px"
                      height="50px"
                    >
                      <path d="M 20 3 C 18.355469 3 17 4.355469 17 6 L 17 9 L 3 9 C 1.355469 9 0 10.355469 0 12 L 0 26.8125 C -0.0078125 26.875 -0.0078125 26.9375 0 27 L 0 44 C 0 45.644531 1.355469 47 3 47 L 47 47 C 48.644531 47 50 45.644531 50 44 L 50 12 C 50 10.355469 48.644531 9 47 9 L 33 9 L 33 6 C 33 4.355469 31.644531 3 30 3 Z M 20 5 L 30 5 C 30.5625 5 31 5.4375 31 6 L 31 9 L 19 9 L 19 6 C 19 5.4375 19.4375 5 20 5 Z M 3 11 L 47 11 C 47.5625 11 48 11.4375 48 12 L 48 26.84375 C 48 26.875 48 26.90625 48 26.9375 L 48 27 C 48 27.5625 47.5625 28 47 28 L 3 28 C 2.4375 28 2 27.5625 2 27 C 2.007813 26.9375 2.007813 26.875 2 26.8125 L 2 12 C 2 11.4375 2.4375 11 3 11 Z M 25 22 C 23.894531 22 23 22.894531 23 24 C 23 25.105469 23.894531 26 25 26 C 26.105469 26 27 25.105469 27 24 C 27 22.894531 26.105469 22 25 22 Z M 2 29.8125 C 2.316406 29.925781 2.648438 30 3 30 L 47 30 C 47.351563 30 47.683594 29.925781 48 29.8125 L 48 44 C 48 44.5625 47.5625 45 47 45 L 3 45 C 2.4375 45 2 44.5625 2 44 Z" />
                    </svg>
                  </div>
                </div>
                <div className="pA iconLine"></div>
              </div>
              <div className="cardText">
                <p className="fs36 fwB mb24">Lend or borrow</p>
                <p className="fs24">
                  Once approved, you can choose the offering you want to invest
                  in while companies can submit the request to raise capital.
                </p>
              </div>
            </div>

            <div className="dF mb140">
              <div className="pR iconElement">
                {/* <img src="/assets/homePage/landing-platform-01.svg" /> */}
                <div
                  style={{
                    backgroundColor: "#26C296",
                    opacity: "20%",
                    height: "100px",
                    width: "100px",
                    borderRadius: "20px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div>
                    <svg
                      width="66"
                      height="47"
                      viewBox="0 0 66 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.07143 0C3.19393 0 0 3.18425 0 7.05V39.95C0 43.8158 3.19393 47 7.07143 47H58.9286C62.8061 47 66 43.8158 66 39.95V7.05C66 3.18425 62.8061 0 58.9286 0H7.07143ZM7.07143 4.7H58.9286C60.2627 4.7 61.2857 5.7199 61.2857 7.05V11.75H7.07143V16.45H61.2857V39.95C61.2857 41.2801 60.2627 42.3 58.9286 42.3H7.07143C5.73729 42.3 4.71429 41.2801 4.71429 39.95V7.05C4.71429 5.7199 5.73729 4.7 7.07143 4.7Z"
                        fill="#2648C2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="cardText">
                <p className="fs36 fwB mb24">Reward</p>
                <p className="fs24">
                  When the campaign hits its funding goal, you can expect
                  returns as stated in the offering T&C.
                </p>
              </div>
            </div>
          </div>
          <div className="rightImage">
            <img src="/assets/homePage/landing-platform.svg" />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default LandingPlatformSection;
