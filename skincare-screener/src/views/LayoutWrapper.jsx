import React from "react";
import styled from "styled-components";

export const LayoutWrapper = (props) => {
  return (
    <>
      <ParentContainer>
        <HeaderContainer>Header</HeaderContainer>
        <MainContainer>{props.children}</MainContainer>
        <FooterContainer>Footer</FooterContainer>
      </ParentContainer>
    </>
  );
};

const ParentContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
const HeaderContainer = styled.header``;
const MainContainer = styled.main``;
const FooterContainer = styled.footer``;
