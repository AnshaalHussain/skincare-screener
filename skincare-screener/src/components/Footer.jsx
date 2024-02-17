import React from "react";
import styled from "styled-components";
import { THEMES } from "../styles/colors";

const Footer = () => {
  return (
    <FooterContainer>
      <GithubReferenceContainer>
        <a
          target="_blank"
          href="https://github.com/AnshaalHussain/skincare-screener"
        >
          Link to Github
        </a>
      </GithubReferenceContainer>
      <IconReferenceContainer>
        <a
          target="_blank"
          href="https://icons8.com/icon/4adZvHtypoR6/foundation-makeup"
        >
          Foundation Makeup
        </a>
        {"  "}
        icon by
        {"  "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </IconReferenceContainer>
        <CreditContainer>
        <a href="github.com/mairfott">
        Created by: Tulaib Hussain 
        </a>
        </CreditContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: lightgrey;
  font-size: 0.9em;
  letter-spacing: 0.6px;
  padding: 0.3em 1.5em;
  min-height: 7vh;
  margin-top: 0.3em;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  

  @media only screen and (max-width: 768px) {
    width: 100%,
    position: fixed;
    left: 0,
    right: 0,
    bottom: 0,

  }
`;

const IconReferenceContainer = styled.div`
  color: grey;

  a {
    text-decoration: none;
    color: ${THEMES.PRIMARY_DARK};

    &:hover {
      text-decoration: none;
      color: black;
    }
  }
`;

const CreditContainer = styled.div`
  color: black;
  font-weight: 20;
  font-size: 0.9em;

  a {
    text-decoration: none;

    &:visited {
      text-decoration: none;
      color: black;
    }

    &:hover {
      color: ${THEMES.PRIMARY_DARK};
    }
  }
`;

const GithubReferenceContainer = styled.div`
  color: black;
  font-weight: 500;

  a {
    text-decoration: none;

    &:visited {
      text-decoration: none;
      color: black;
    }

    &:hover {
      color: ${THEMES.PRIMARY_DARK};
    }
  }
`;

export default Footer;
