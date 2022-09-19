import styled from "styled-components";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoFileTrayOutline } from "react-icons/io5";
import { RiPlayListFill } from "react-icons/ri";
import { BiMicrophone } from "react-icons/bi";
import { FiMusic } from "react-icons/fi";

const StyledPlayList = styled.div`
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .play-list-inner-box {
    flex-direction: column;
    width: 670px;
    padding: 30px 0;
    font-size: 18px;

    .menu-list {
      display: flex;
      .menu {
        height: 50px;
        width: calc(670px / 3);
        border-bottom: 3px solid #464646;
        cursor: pointer;
      }
      .selected-menu {
        height: 50px;
        width: calc(670px / 3);
        border-bottom: 3px solid;
        cursor: pointer;
      }
      .icon {
        margin-right: 10px;
      }
    }

    .play-list-menu {
      justify-content: space-between;
      margin-top: 40px;
      width: 670px;
      color: #85a0a0;
      font-size: 15px;

      .menu {
        margin: 0 10px;
        cursor: pointer;

        .icon {
          margin-right: 5px;
        }
      }
    }
  }
`;

const PlayList = () => {
  const [isPlayListClicked, setIsPlayListClicked] = useState(true);
  const [isArtistClicked, setIsArtistClicked] = useState(false);
  const [isSimilarClicked, setIsSimilarClicked] = useState(false);

  return (
    <StyledPlayList>
      <div className="play-list-inner-box flex-center">
        <div className="menu-list">
          <div
            className={
              isPlayListClicked
                ? "selected-menu flex-center"
                : "menu flex-center"
            }
            onClick={() => {
              setIsPlayListClicked(true);
              setIsArtistClicked(false);
              setIsSimilarClicked(false);
            }}
          >
            <RiPlayListFill className="icon" size="20" />
            재생목록
          </div>
          <div
            className={
              isArtistClicked ? "selected-menu flex-center" : "menu flex-center"
            }
            onClick={() => {
              setIsPlayListClicked(false);
              setIsArtistClicked(true);
              setIsSimilarClicked(false);
            }}
          >
            <BiMicrophone className="icon" size="20" />
            아티스트
          </div>
          <div
            className={
              isSimilarClicked
                ? "selected-menu flex-center"
                : "menu flex-center"
            }
            onClick={() => {
              setIsPlayListClicked(false);
              setIsArtistClicked(false);
              setIsSimilarClicked(true);
            }}
          >
            <FiMusic className="icon" size="20" />
            유사곡
          </div>
        </div>
        <div className="play-list-menu flex-center">
          <div className="menu-wrapper flex-center">
            <div className="menu flex-center">
              <IoSearchSharp size="17" className="icon" />
              검색
            </div>
            {!isPlayListClicked || (
              <div className="menu flex-center">
                <IoFileTrayOutline size="17" className="icon" />내 리스트
                가져오기
              </div>
            )}
          </div>

          <div className="menu-wrapper flex-center">
            <div className="menu">편집</div>
            <div className="menu">그룹접기</div>
          </div>
        </div>
      </div>
    </StyledPlayList>
  );
};

export default PlayList;
