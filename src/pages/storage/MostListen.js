import styled from "styled-components";

const StyledMostListen = styled.div`
  .my-list-inner-box {
    width: 1280px;
  }
`;

const MostListen = () => {
  return (
    <StyledMostListen>
      <div className="my-list-inner-box"></div>
    </StyledMostListen>
  );
};

export default MostListen;
