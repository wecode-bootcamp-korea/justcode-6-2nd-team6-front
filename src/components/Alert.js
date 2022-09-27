import styled from "styled-components";
import { useEffect } from "react";

const StyledAlert = styled.div`
  .alert-inner-box {
    position: fixed;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75px;
    background-color: #181818;
    color: white;
    z-index: 3000;
    font-size: 18px;
    font-weight: 700;
  }
`;

const Alert = ({ alertOn, setAlertOn, isExpandedClicked }) => {
  useEffect(() => {
    if (alertOn !== false)
      setTimeout(() => {
        setAlertOn(false);
      }, 3000);
  }, [alertOn]);

  return (
    <StyledAlert>
      {!alertOn || (
        <div
          className="alert-inner-box"
          style={{ bottom: isExpandedClicked ? "0px" : "120px" }}
        >
          {alertOn}
        </div>
      )}
    </StyledAlert>
  );
};

export default Alert;
