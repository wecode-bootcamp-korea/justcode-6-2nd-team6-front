import React from "react";
import styled from "styled-components";
import cover from "../Images/album-cover-3.jpg";
import { BsFillPlayFill } from "react-icons/bs";

const StyledDetailed = styled.div`
  width: 100%;
  min-width: 765px;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;

  section.album-track-inner-box {
    height: 100%;
    padding: 95px 80px 40px;
    background-color: #fff;

    div.album-track-inner {
      max-width: 1280px;
      min-width: 765px;
      margin: 0 auto;
      padding-top: 50px;
    }
  }

  /* 앨범 트랙 탑부분 */
  div.album-track-top-info-box {
    width: 100%;
    position: relative;
    padding-left: 50px;

    div.album-track-cover {
      div.album-track-thumnail {
        position: absolute;
        top: 20px;
        right: 10px;
        z-index: 10;
        height: 0;
      }
    }
  }

  /* 앨범 트랙 커버 이미지*/
  div.album-track-thumnail-box {
    z-index: 1;
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 6px;
  }

  img.album-track-tumnail-img {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }

  button.album-track-play {
    width: 55px;
    height: 55px;
    z-index: 4;
    position: absolute;
    bottom: 6px;
    right: 780px;
    padding: 0;
    border: none;
    background: none;
    color: white;

    .album-track-play-icon {
      width: 100%;
      height: 100%;
    }
  }
`;

const AlbumTrack = () => {
  return (
    <StyledDetailed>
      <section className="album-track-inner-box">
        {/*  */}
        <div className="album-track-inner">
          <h2 className="hidden"> 컨텐츠 상세보기</h2>
          <div className="album-track-top-info-box">
            <div className="album-track-cover">
              <div className="album-track-thumnail" />
              <div className="album-track-thumnail-box">
                <img
                  alt="앨범 표지"
                  className="album-track-tumnail-img"
                  src={cover}
                />
              </div>
            </div>
            <button title="앨범 듣기" className="album-track-play">
              <BsFillPlayFill className="album-track-play-icon" />
            </button>
          </div>
        </div>
      </section>
    </StyledDetailed>
  );
};

export default AlbumTrack;
