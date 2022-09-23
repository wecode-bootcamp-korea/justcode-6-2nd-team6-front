import React from "react";
import styled from "styled-components";
import { BsPlay } from "react-icons/bs";
import cover from "../Images/album-cover-3.jpg";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";

const StyledTrack = styled.div`
  padding-top: 40px;

  div.detailed-track-inner-box {
    div.detailed-track-whole-box {
      margin-left: 10px;
    }

    .detailed-track-whole-icon {
      vertical-align: middle;
    }

    span.detailed-track-whole-play {
      font-size: 16px;
      text-align: center;
    }
  }

  div.detailed-track-table-wrap {
    margin-top: 40px;
  }
  div.detailed-track-table-info {
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #a0a0a0;
    font-weight: 550;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
  }

  span.detailed-track-table-info-number {
    margin: 0 20px;
  }

  span.detailed-track-table-info-list {
    margin: 0 20px;
  }

  div.detailed-track-table-info-left {
    display: flex;
    flex-direction: row;
  }

  div.detailed-track-table-album {
    display: flex;
    flex-direction: row;
    margin-left: 15px;
  }

  img.detailed-track-table-info-img {
    width: 55px;
    height: 55px;
    border-radius: 6px;
  }

  button.detailed-track-table-icon {
    background: none;
    border: none;
  }

  .listen-icon,
  .more-icon {
    width: 30px;
    height: 30px;
    color: #333333;
  }

  .list-icon {
    width: 30px;
    height: 30px;
    margin: 0 25px;
    color: #333333;
  }
`;

const DetailedTrack = () => {
  return (
    <StyledTrack>
      <div className="detailed-track-inner-box">
        <div className="detailed-track-whole-box">
          <BsPlay className="detailed-track-whole-icon" />
          <span className="detailed-track-whole-play">전체듣기</span>
        </div>
        {/* 수록곡 정보 */}
        <div className="detailed-track-table-wrap">
          <div className="detailed-track-table-info">
            <div className="detailed-track-table-info-left">
              <input
                alt="체크박스"
                type="checkbox"
                className="detailed-track-table-info-check"
              />
              <span className="detailed-track-table-info-number">번호</span>
              <span className="detailed-track-table-info-song">곡/앨범</span>
            </div>
            <div className="detailed-track-table-info-center">
              <div className="detailed-track-table-info-artist">아티스트</div>
            </div>
            <div className="detailed-track-table-info-right">
              <span className="detailed-track-table-info-listen">듣기</span>
              <span className="detailed-track-table-info-list">내 리스트</span>
              <span className="detailed-track-table-info-more">더보기</span>
            </div>
          </div>
        </div>
        {/* 수록곡 내용물 */}
        <div className="detailed-track-table-info">
          <div className="detailed-track-table-info-left">
            <input
              alt="체크박스"
              type="checkbox"
              className="detailed-track-table-info-check"
            />
            <span className="detailed-track-table-info-number">1</span>
            <div className="detailed-track-table-album">
              <img
                alt="앨범 커버"
                src={cover}
                className="detailed-track-table-info-img"
              />
              <div className="detailed-track-table-album">
                <div className="detailed-track-table-info-song-name">
                  My Time
                </div>
                <div className="detailed-track-table-info-album-name">
                  Last Kindness
                </div>
              </div>
            </div>
          </div>
          <div className="detailed-track-table-info-center">
            <div className="detailed-track-table-info-artist">옌자민</div>
          </div>
          <div className="detailed-track-table-info-right">
            <button type="button" className="detailed-track-table-icon">
              <BsFillPlayFill className="listen-icon" />
            </button>
            <button type="button" className="detailed-track-table-icon">
              <AiOutlineFolderAdd className="list-icon" />
            </button>
            <button type="button" className="detailed-track-table-icon">
              <FiMoreVertical className="more-icon" />
            </button>
          </div>
        </div>
      </div>
    </StyledTrack>
  );
};

export default DetailedTrack;
