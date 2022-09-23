import React, { useState } from "react";
import styled from "styled-components";
import cover from "../Images/album-cover-3.jpg";
import next from "../Images/next.png";
import DetailedInfo from "./DetailedInfo";
import DetailedTrack from "./DetailedTrack";
import { BsFillPlayFill } from "react-icons/bs";
import { RiPlayListAddFill } from "react-icons/ri";
import { HiOutlineFolderAdd } from "react-icons/hi";
import { BsSuitHeart } from "react-icons/bs";

const StyledDetailed = styled.div`
  width: 100%;
  min-width: 765px;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  font-family: "NanumBarunGothic", sans-serif;

  section.detail-inner-box {
    height: 100%;
    padding: 95px 80px 40px;
    background-color: #fff;

    div.detail-wrap {
      width: 600px;
      display: flex;
      flex-direction: row;
      padding-top: 40px;
    }
  }

  /* 앨범 트랙 커버 이미지*/
  div.detail-inner {
    position: static;

    div.detail-cover {
      position: relative;
      width: 240px;
      height: 240px;
      border-radius: 6px;
    }
  }

  img.detail-cover-img {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: auto;
    border-radius: 6px;
  }

  button.detail-play {
    width: 55px;
    height: 55px;
    z-index: auto;
    position: absolute;
    bottom: 6px;
    right: 1px;
    padding: 0;
    border: none;
    background: none;
    color: white;

    .detail-play-icon {
      width: 100%;
      height: 100%;
    }
  }

  div.detail-album-inner-box {
    margin: auto 30px;

    div.detail-album-title {
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 25px;
    }

    div.detail-album-singer {
      font-size: 20px;
      margin-bottom: 35px;
      color: #444444;

      img.detail-album-icon-next {
        width: 12px;
        height: 12px;
        padding-left: 3px;
      }
    }

    div.detail-album-kind {
      font-size: 15px;
      margin-bottom: 10px;
    }

    div.detail-album-date {
      font-size: 15px;
      margin-bottom: 20px;
      color: #969ca7;
    }

    .detail-album-icon-list,
    .detail-album-icon-like {
      width: 25px;
      height: 25px;
      color: #3d3d3d;
    }

    .detail-album-icon-folder {
      width: 25px;
      height: 25px;
      margin: 0 20px;
      color: #3d3d3d;
    }
  }

  div.detail-page-tab {
    margin-top: 50px;
  }

  ul.detail-page-tab-box {
    display: flex;
    flex-direction: row;
  }

  li.detail-page-tab-stick {
    margin: 0 10px;
  }

  .detail-page-tab-btn {
    font-family: "NanumBarunGothic", sans-serif;
    background: none;
    border: none;
    font-size: 18px;
    margin: 0 10px;
    cursor: pointer;

    .focused {
      padding: 5px 15px;
      color: #fff;
      background-color: #3f3fff;
      border: none;
      border-radius: 16px;
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

const StyledTab = styled.section`
  margin-top: 10px;
`;

const Detail = () => {
  const [showTrack, setShowTrack] = useState(true);
  const [currentTab, setCurrentTab] = useState(0);

  const selectTabHandler = (index) => {
    setCurrentTab(index);
  };

  const trackHandler = () => {
    setShowTrack(true);
  };

  const infoHandler = () => {
    setShowTrack(false);
  };

  const tabArr = [
    { name: "상세정보", content: <DetailedInfo /> },
    { name: "수록곡", content: <DetailedTrack /> },
  ];

  return (
    <StyledDetailed>
      <section className="detail-inner-box">
        {/* 상세 페이지 썸네일 */}
        <div className="detail-wrap">
          <div className="detail-inner">
            <h2 className="hidden"> 컨텐츠 상세보기</h2>
            <div className="detail-cover">
              <img alt="앨범 표지" className="detail-cover-img" src={cover} />
              <button title="앨범 듣기" className="detail-play">
                <BsFillPlayFill className="detail-play-icon" />
              </button>
            </div>
          </div>
          {/* 상세 페이지 앨범 제목 및 가수 */}
          <div className="detail-album-inner-box">
            <div className="detail-album-title">관심과 사랑</div>
            <div className="detail-album-singer">
              <span>Monsune</span>
              <img
                alt="아티스트"
                className="detail-album-icon-next"
                src={next}
              />
            </div>
            <div className="detail-album-kind">싱글</div>
            <div className="detail-album-date">2022-09-21</div>
            <div className="detail-album-icon">
              <RiPlayListAddFill className="detail-album-icon-list" />
              <HiOutlineFolderAdd className="detail-album-icon-folder" />
              <BsSuitHeart className="detail-album-icon-like" />
            </div>
          </div>
        </div>
        {/* 상세 페이지 탭 */}
        <div className="detail-page-tab">
          <ul className="detail-page-tab-box">
            {tabArr.map((el, index) => {
              return (
                <li
                  key={index}
                  className={
                    currentTab === index
                      ? "detail-page-tab-btn focused"
                      : "detail-page-tab-btn"
                  }
                  onClick={() => selectTabHandler(index)}
                >
                  {el.name}
                </li>
              );
            })}
          </ul>
        </div>
        {/* 상세 페이지 상세정보와 수록곡 */}
        <StyledTab>
          <div>{tabArr[currentTab].content}</div>
        </StyledTab>
      </section>
    </StyledDetailed>
  );
};

export default Detail;
