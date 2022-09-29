import React from 'react';
import styled from 'styled-components';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import Container from '@mui/material/Container';
import LoginPopup from '../login/LoginPopup';

const StyledMain = styled.main`
  width: 1280px;
  margin: 0 auto;

  div.main-inner-box {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    font-family: 'NanumBarunGothic', sans-serif;

    div.main-wrap {
      margin-top: 120px;
    }
  }
`;

const Main = ({ loginText }) => {
  return (
    <StyledMain>
      <div className='main-inner-box'>
        <div className='main-wrap'>
          <FirstSection />
          <SecondSection />
        </div>
      </div>
      {loginText === true ? <LoginPopup /> : null}
    </StyledMain>
  );
};

export default Main;
