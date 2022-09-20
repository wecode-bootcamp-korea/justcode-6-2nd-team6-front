import React from "react";
import styled from "styled-components";
import albumCover from "../../../Images/album-cover.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";

const StyledSection = styled.section`
  width: 1080px;
  height: 500px;
  margin: 0 auto;
  position: relative;

  section.first-section-inner-box {
    padding-top: 0 !important;
  }
`;

const StyledSlider = styled.div`
  div.first-section-slider-box {
    background-color: #4c4863;
    border-radius: 7px;

    a.first-section-slider-flex {
      display: flex;
      flex-direction: row;
      height: 350px;
      width: 100%;
      white-space: normal;
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
  }

  div.first-section-slider-info {
    width: 360px;
    padding: 50px 0 0 50px;
    font-weight: 800;
    line-height: 40px;
    color: #fff;

    h4.first-section-slider-title {
      font-size: 30px;
      font-weight: 600;
      line-height: 40px;
    }

    div.first-section-slider-date {
      margin-top: 20px;

      span.first-section-stick {
        margin: 0 10px;
        opacity: 50%;
      }
    }

    button.first-section-button {
      margin-top: 50px;
      padding: 0;
      background: none;
      border: none;
      border-radius: 50%;

      .first-section-play-button {
        width: 45px;
        height: 45px;
        color: white;
      }
    }
  }

  div.first-section-playlist-wrap {
    width: 100%
  }

  ul.first-section-playlist-box {
    display: grid;

  }

  li.first-section-playlist-list {
    display: flex;
    padding: 10px;

    div.first-section-playlist-box-info {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      line-height: 25px;
      font-size: 18px;
      color: white;
    }
  }

  img.first-section-album-cover {
    width: 60px;
    height: 60px;
    border-radius: 7px;
  }  
`;

const FirstSection = () => {
  return (
    <StyledSection>
      <section className="first-section-inner-box">
        <StyledSlider>
          <div className="first-section-wrap">
            {/* 첫번째 슬라이드 */}
            <div className="first-section-slider-box">
              <a href="#" className="first-section-slider-flex">
                {/* 플리 소개 */}
                <div className="first-section-slider-info">
                  <h4 className="first-section-slider-title">
                    퇴근 후 쇠질엔 이만한 플리가 없지😎
                  </h4>
                  <div className="first-section-slider-date">
                    총 14곡
                    <span className="first-section-stick">|</span>
                    2022.09.15
                  </div>
                  <button
                    title="퇴근 후 쇠질엔 이만한 플리가 없지😎"
                    type="button"
                    className="first-section-button"
                  >
                    <BsFillPlayCircleFill className="first-section-play-button" />
                  </button>
                </div>
                {/* 노래리스트 */}
                <div className="first-section-playlist-wrap">
                  <ul className="first-section-playlist-box">
                    <li className="first-section-playlist-list">
                      <img
                        alt="앨범 표지"
                        src={albumCover}
                        className="first-section-album-cover"
                      />
                      <div className="first-section-playlist-box-info">
                        <strong className="first-section-playlist-song">
                          Song
                        </strong>
                        <div className="first-section-playlist-singer">
                          Eddie
                        </div>
                      </div>
                    </li>
                    <li className="first-section-playlist-list">
                      <img
                        alt="앨범 표지"
                        src={albumCover}
                        className="first-section-album-cover"
                      />
                      <div className="first-section-playlist-box-info">
                        <strong className="first-section-playlist-song">
                          Song
                        </strong>
                        <div className="first-section-playlist-singer">
                          Eddie
                        </div>
                      </div>
                    </li>
                    <li className="first-section-playlist-list">
                      <img
                        alt="앨범 표지"
                        src={albumCover}
                        className="first-section-album-cover"
                      />
                      <div className="first-section-playlist-box-info">
                        <strong className="first-section-playlist-song">
                          Song
                        </strong>
                        <div className="first-section-playlist-singer">
                          Eddie
                        </div>
                      </div>
                    </li>
                    <li className="first-section-playlist-list">
                      <img
                        alt="앨범 표지"
                        src={albumCover}
                        className="first-section-album-cover"
                      />
                      <div className="first-section-playlist-box-info">
                        <strong className="first-section-playlist-song">
                          Song
                        </strong>
                        <div className="first-section-playlist-singer">
                          Eddie
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* 플리 노래리스트 끝 */}
              </a>
            </div>
          </div>
        </StyledSlider>
      </section>
    </StyledSection>
  );
};

export default FirstSection;
