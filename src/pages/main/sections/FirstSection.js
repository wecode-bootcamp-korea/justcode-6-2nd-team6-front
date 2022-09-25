import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import NextArrow from '../arrowIcon/NextArrow';
import PrevArrow from '../arrowIcon/PrevArrow';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const StyledSection = styled.section`
  width: 1080px;
  height: 400px;
  margin: 0 auto;
  display: block;
  position: relative;

  section.first-section-inner-box {
    padding-top: 0 !important;
  }
`;

const DivNext = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: -50px;
  text-align: right;
  line-height: 30px;
  z-index: 5;
`;

const DivPrev = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: -50px;
  text-align: left;
  line-height: 30px;
  z-index: 5;
`;

const StyledSlider = styled(Slider)`
  margin: 0 auto;

  button.slick-arrow.slick-prev {
    width: 30px;
    height: 30px;
  }

  .slick-prev:before,
  .slick-next:before {
    opacity: 0;
    display: none;
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
  }
  div.first-section-slider-info {
    width: 280px;
    padding: 40px 0 10px 0;
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
        width: 55px;
        height: 55px;
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 25px;
      font-size: 17px;
      color: white;

      div.first-section-playlist-singer {
        color: #b0afba;
      }
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
  const [slide, setSlide] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.slideData);
        setSlide(data.slideData);
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
    nextArrow: (
      <DivNext>
        <NextArrow />
      </DivNext>
    ),
    prevArrow: (
      <DivPrev>
        <PrevArrow />
      </DivPrev>
    ),
  };

  return (
    <StyledSection>
      <section className='first-section-inner-box'>
        <StyledSlider {...settings}>
          {slide.map((result) => {
            return (
              <div
                key={result.titleData.playlistId}
                className='first-section-wrap'
              >
                {/* 첫번째 슬라이드 */}
                <div className='first-section-slider-box'>
                  <Link to='#' className='first-section-slider-flex'>
                    {/* 플리 소개 */}
                    <div className='first-section-slider-info'>
                      <h4 className='first-section-slider-title'>
                        {result.titleData.playlistTitle}
                      </h4>
                      <div className='first-section-slider-date'>
                        총 {result.titleData.playlistSongsCount}곡
                        <span className='first-section-stick'>|</span>
                        {result.titleData.createdDate}
                      </div>
                      <button
                        title='퇴근 후 쇠질엔 이만한 플리가 없지😎'
                        type='button'
                        className='first-section-button'
                      >
                        <BsFillPlayCircleFill className='first-section-play-button' />
                      </button>
                    </div>
                    {/* 노래리스트 */}
                    <div className='first-section-playlist-wrap'>
                      {slide.songsData.map((result) => {
                        return (
                          <ul
                            key={result.songId}
                            className='first-section-playlist-box'
                          >
                            <li className='first-section-playlist-list'>
                              <img
                                alt='앨범 표지'
                                src={result.albumImage}
                                className='first-section-album-cover'
                              />
                              <div className='first-section-playlist-box-info'>
                                <strong className='first-section-playlist-song'>
                                  {result.songTitle}
                                </strong>
                                <div className='first-section-playlist-singer'>
                                  {result.artist}
                                </div>
                              </div>
                            </li>
                          </ul>
                        );
                      })}
                    </div>
                    {/* 플리 노래리스트 끝 */}
                  </Link>
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
