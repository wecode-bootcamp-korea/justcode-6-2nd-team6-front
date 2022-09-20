import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const StyledSlider = styled(Slider)`
  width: 70%
  margin: 0 auto;

  botton.slick-arrow.slick-prev {
    width: 30px;
    height: 30px;
  }

  .slick-prev:before {
    color: black;
    content: '<';
  }
  .slick-next:before {
    color: black;
    content: '>';
  }

  div.first-section-slider-box {
    background-color: #4c4863;
    border-radius: 7px;

    a.first-section-slider-flex {
      height: 350px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      white-space: normal;
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
  }

  div.first-section-slider-info {
    width: 280px;
    padding: 40px 0 10px 0;
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
      margin-top: 70px;
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
    margin: auto 0;
  }

  ul.first-section-playlist-box {
    display: grid;
    grid-template-columns: 250px 250px;
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
      font-size: 17px;
      color: white;
    }
  }

  img.first-section-album-cover {
    width: 55px;
    height: 55px;
    margin: auto 0;
    border-radius: 7px;
  }  
`;

const FirstSection = () => {
  const [titleList, setTitleList] = useState([]);
  const [songList, setSongList] = useState([]);

  useEffect(() => {
    fetch("/data/slideData.json")
      .then((res) => res.json())
      .then((data) => {
        setTitleList(data.slideData.slideTitleData);
        setSongList(data.slideData.slideSongData);
      });
  }, []);

  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <StyledSection>
      <section className="first-section-inner-box">
        <StyledSlider {...settings}>
          {titleList.map((result) => {
            return (
              <div key={result.titleId} className="first-section-wrap">
                {/* 첫번째 슬라이드 */}
                <div className="first-section-slider-box">
                  <a href="#" className="first-section-slider-flex">
                    {/* 플리 소개 */}
                    <div className="first-section-slider-info">
                      <h4 className="first-section-slider-title">
                        {result.listTitle}
                      </h4>
                      <div className="first-section-slider-date">
                        {result.listTotal}
                        <span className="first-section-stick">|</span>
                        {result.listDate}
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
                        {songList.map((song) => {
                          return (
                            <li
                              key={song.songId}
                              className="first-section-playlist-list"
                            >
                              <img
                                alt="앨범 표지"
                                src={song.slideSongImg}
                                className="first-section-album-cover"
                              />
                              <div className="first-section-playlist-box-info">
                                <strong className="first-section-playlist-song">
                                  {song.slideSongName}
                                </strong>
                                <div className="first-section-playlist-singer">
                                  {song.slideSinger}
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    {/* 플리 노래리스트 끝 */}
                  </a>
                </div>
              </div>
            );
          })}
        </StyledSlider>
      </section>
    </StyledSection>
  );
};

export default FirstSection;
