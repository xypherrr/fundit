import React from "react";
import styled from "styled-components";
import FundtLogo from "../../assets/fundt-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import Container from "../container/container";

const Wrapper = styled.div`
  padding: 18px 56px;
  background: #01274c;
  color: #fff;
  z-index: 1;
  width: 100%;
  .menuItems {
    width: 50%;
  }
`;

const CustomLink = styled(Link)`
  color: #fff;
  &:hover {
    font-weight: bold;
    color: #fff;
  }
`;

const LoginLink = styled(Link)`
  color: #26c296;
  margin-left: 18px;
  &:hover {
    font-weight: bold;
    color: #26c296;
  }
`;

const SignUpButton = styled(Link)`
  color: #fff;
  background: #26c296;
  border-radius: 50px;
  padding: 10px 24px;
  border: none;
  &:hover {
    font-weight: bold;
    color: #fff;
  }
`;

const Header = ({ className }) => {
  return (
    <Wrapper className={`${className} pF`}>
      <Container className="dFA jcSB">
        <div className="dFA">
          <img src="/assets/icon/fundt-icon-logo.svg" width="50" height="50" />
          <p className="fs24 fwB">FUNDT</p>
        </div>

        <div className="dF jcSB menuItems">
          <CustomLink className="fs18" to="/">
            Home
          </CustomLink>
          <CustomLink className="fs18" to="#">
            Projects
          </CustomLink>
          <CustomLink className="fs18" to="#">
            How it works
          </CustomLink>
          <CustomLink className="fs18" to="#">
            Contact Us
          </CustomLink>
        </div>
        <div className="dFA">
          <SignUpButton className="dF jcC taC fs16">Sign Up</SignUpButton>
          <LoginLink className="fs12" to="#">
            Log In
          </LoginLink>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Header;
