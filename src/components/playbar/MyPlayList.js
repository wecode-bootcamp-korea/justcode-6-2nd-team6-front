import { useState } from "react";
import styled from "styled-components";
import Modal from "@mui/material/Modal";
import Dialog from "@mui/material/Dialog";
import { AiOutlinePlus } from "react-icons/ai";

const StyledDialog = styled(Dialog)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "NanumBarunGothic", sans-serif;

    .my-play-list-inner-box {
      display: flex;
      flex-direction: column;
      width: 525px;
      padding: 30px;
      border-radius: 5px;
      background-color: white;

      .title {
        padding-bottom: 25px;
        font-size: 18px;
        font-weight: 700;
      }

      .play-lists {
        overflow-y: auto;
        max-height: 400px;
      }

      .add-list-box {
        display: flex;
        align-items: center;
        height: 80px;
        border-bottom: 1px solid #f2f2f2;
        color: blue;
        cursor: pointer;

        .add-list-cover {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 60px;
          width: 60px;
          margin-right: 15px;
          border-radius: 5px;
          background-color: #dedede;
          font-size: 30px;
        }
        .add-list {
          font-weight: bold;
        }
      }
    }

    .play-list-bar-inner-box {
      display: flex;
      align-items: center;
      height: 80px;
      border-bottom: 1px solid #f2f2f2;
      cursor: pointer;

      .cover {
        height: 60px;
        width: 60px;
        margin-right: 15px;
        border-radius: 5px;
      }

      .album-title {
        margin-bottom: 10px;
      }

      .num {
        color: #969696;
        font-size: 14px;
      }
    }
  }
`;

const MyPlayList = ({
  isMyPlayListClicked,
  setIsMyPlayListClicked,
  playingMusicId,
  selectedSongId,
  isGetMyPlayListClicked,
  setIsGetMyPlayListClicked,
}) => {
  const arr = [1, 2, 3, 4, 5, 6, 7];

  if (selectedSongId == Infinity) {
    console.log("playingMusicId", playingMusicId);
  } else console.log("selectedSongId", selectedSongId);

  return (
    <StyledDialog
      open={isMyPlayListClicked}
      onClose={() => {
        setIsMyPlayListClicked(false);
        setTimeout(() => setIsGetMyPlayListClicked(false), 200);
      }}
    >
      {isGetMyPlayListClicked ? (
        <div>내 리스트 가져오기 클릭시 나오는 내용</div>
      ) : (
        <div className="my-play-list-inner-box">
          <div className="title">내 리스트에 담기</div>
          <div className="play-lists">
            <div className="add-list-box">
              <div className="add-list-cover">
                <AiOutlinePlus />
              </div>
              <div className="play-list-info">
                <div className="add-list">새로운 리스트 추가하기</div>
              </div>
            </div>
            {arr.map(() => (
              <PlayListBar />
            ))}
          </div>
        </div>
      )}
    </StyledDialog>
  );
};

const PlayListBar = () => {
  return (
    <div className="play-list-bar-inner-box">
      <img src="/Images/nothing.png" alt="playlist cover" className="cover" />
      <div className="play-list-info">
        <div className="album-title">플레이리스트 제목</div>
        <div className="num">3곡</div>
      </div>
    </div>
  );
};

export default MyPlayList;
