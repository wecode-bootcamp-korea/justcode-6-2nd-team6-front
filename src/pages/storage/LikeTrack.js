import styled from "styled-components";

const StyledLikeTrack = styled.div`
  .my-list-inner-box {
    width: 1280px;
  }
`;

const LikeTrack = () => {
  return (
    <StyledLikeTrack>
      <div className="my-list-inner-box"></div>
    </StyledLikeTrack>
  );
};

export default LikeTrack;
