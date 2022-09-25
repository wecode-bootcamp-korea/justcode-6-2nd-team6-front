import styled from "styled-components";

const StyledMyList = styled.div`
  .my-list-inner-box {
    width: 1280px;
  }
`;

const MyList = () => {
  return (
    <StyledMyList>
      <div className="my-list-inner-box"></div>
    </StyledMyList>
  );
};

export default MyList;
