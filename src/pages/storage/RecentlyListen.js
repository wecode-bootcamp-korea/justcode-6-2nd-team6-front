import styled from "styled-components";

const StyledRecentlyListen = styled.div`
  .my-list-inner-box {
    width: 1280px;
  }
`;

const RecentlyListen = () => {
  return (
    <StyledRecentlyListen>
      <div className="my-list-inner-box"></div>
    </StyledRecentlyListen>
  );
};

export default RecentlyListen;
