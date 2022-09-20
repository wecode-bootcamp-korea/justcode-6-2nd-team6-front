import React from "react";
import styled from "styled-components";
import FirstSection from "./sections/FirstSection";

const StyledMain = styled.main`
  div.main-inner-box {
    width: 100%
    height: 100%;
    display: flex;
    justify-content: center;
    font-family: "NanumBarunGothic", sans-serif;

    div.main-wrap {
      margin-top: 120px;
      background-color: #fff;
    }
  }
`;

const Main = () => {
  return (
    <StyledMain>
      <div className="main-inner-box">
        <div className="main-wrap">
          <FirstSection />
        </div>
      </div>
    </StyledMain>
  );
};

export default Main;
