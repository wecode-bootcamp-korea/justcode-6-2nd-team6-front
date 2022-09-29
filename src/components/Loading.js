import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledLoading = styled.div`
  .loading-container {
    /* display: flex;
    align-items: center;
    justify-content: center; */
    width: 100%;
    height: 100vh;

    .loading {
      position: absolute;
      top: 50vh;
      right: calc(50% - 30px);
    }
  }
`;

const Loading = () => {
  return (
    <StyledLoading>
      <div className="loading-container">
        <CircularProgress className="loading" />
      </div>
    </StyledLoading>
  );
};

export default Loading;
