import { useState, useEffect } from "react";
import styled from "styled-components";
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
        color: #3f3fff;
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
        font-weight: 700;
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
  isGetMyPlayListClicked,
  setIsGetMyPlayListClicked,
  checkedList,
  setCheckedList,
  setAlertOn,
}) => {
  const arr = [1, 2, 3];

  return (
    <StyledDialog
      open={isMyPlayListClicked}
      onClose={() => {
        setIsMyPlayListClicked(false);
        setTimeout(() => setIsGetMyPlayListClicked(false), 200);
        setCheckedList([]);
      }}
    >
      {/* 내 리스트 가져오기 and 새로운 리스트 추가하기 */}
      {isGetMyPlayListClicked ? (
        <div className="my-play-list-inner-box">
          <div className="title">내 리스트 가져오기</div>
          <div className="play-lists">
            {arr.map((el) => (
              <PlayListBar key={el} />
            ))}
          </div>
        </div>
      ) : (
        <div className="my-play-list-inner-box">
          <div className="title">내 리스트에 담기</div>
          <div className="play-lists">
            {/* 새로운 리스트 추가하기 토글 */}
            <div className="add-list-box" onClick={() => {}}>
              <div className="add-list-cover">
                <AiOutlinePlus />
              </div>
              <div className="play-list-info">
                <div className="add-list">새로운 리스트 추가하기</div>
              </div>
            </div>
            {arr.map((el, i) => (
              <PlayListBar key={arr[i]} />
            ))}
          </div>
        </div>
      )}
    </StyledDialog>
  );
};

// 플레이 리스트 (낱개)
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
