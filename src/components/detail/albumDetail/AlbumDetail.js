import React, { useState } from 'react';
import styled from 'styled-components';
import DetailInfo from './DetailInfo';
import DetailTrack from './DetailTrack';
import { BsFillPlayFill } from 'react-icons/bs';
import { RiPlayListAddFill } from 'react-icons/ri';
import { RiFolderAddLine } from 'react-icons/ri';
import { BsSuitHeart } from 'react-icons/bs';

const StyledDetail = styled.div`
  width: 100%;
  min-width: 765px;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  font-family: 'NanumBarunGothic', sans-serif;

  /* a, button에 호버 주기 */
  .hover {
    &:hover {
      color: #3f3fff;
      cursor: pointer;
    }
  }

  section.album-detail-inner-box {
    height: 100%;
    padding: 95px 80px 40px;
    background-color: #fff;

    div.album-detail-wrap {
      width: 600px;
      display: flex;
      flex-direction: row;
      padding-top: 40px;
    }
  }

  /* 앨범 트랙 커버 이미지*/
  div.album-detail-inner {
    position: static;

    div.album-detail-cover {
      position: relative;
      width: 240px;
      height: 240px;
      border-radius: 6px;
    }
  }

  img.album-detail-cover-img {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: auto;
    border-radius: 6px;

    &:hover {
      filter: brightness(70%);
    }
  }

  button.album-detail-play {
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

    .album-detail-play-icon {
      width: 100%;
      height: 100%;
    }
  }

  div.album-detail-inner-box {
    margin: auto 30px;

    div.album-detail-title {
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 25px;

      &:hover {
        cursor: pointer;
        color: #3f3fff;
      }
    }

    div.album-detail-singer {
      font-size: 20px;
      margin-bottom: 35px;
      color: #444444;

      img.album-detail-icon-next {
        width: 12px;
        height: 12px;
        padding-left: 3px;
      }
    }

    div.album-detail-kind {
      font-size: 15px;
      margin-bottom: 10px;
    }

    div.album-detail-date {
      font-size: 15px;
      margin-bottom: 20px;
      color: #969ca7;
    }

    .album-detail-icon-list,
    .album-detail-icon-like {
      width: 25px;
      height: 25px;
      color: #3d3d3d;

      &:hover {
        cursor: pointer;
        color: #3f3fff;
      }
    }

    .album-detail-icon-folder {
      width: 25px;
      height: 25px;
      margin: 0 20px;
      color: #3d3d3d;

      &:hover {
        cursor: pointer;
        color: #3f3fff;
      }
    }
  }

  div.album-detail-page-tab {
    margin-top: 50px;
  }

  ul.album-detail-page-tab-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .focus-on {
      height: 35px;
      width: 100px;
      margin: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color: #3f3fff;
      border: none;
      border-radius: 100px;
      font-size: 17px;
      cursor: pointer;
    }

    .focus-off {
      height: 35px;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      background-color: none;
      border: none;
      border-radius: 100px;
      font-size: 17px;
      cursor: pointer;
    }
  }

  li.album-detail-page-tab-stick {
    margin: 0 10px;
  }

  .album-detail-page-tab-btn {
    font-family: 'NanumBarunGothic', sans-serif;
    background: none;
    border: none;
    font-size: 18px;
    margin: 0 10px;
    cursor: pointer;
  }
`;

const StyledTab = styled.section`
  margin-top: 10px;
`;

const AlbumDetail = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const selectTabHandler = (index) => {
    setCurrentTab(index);
  };

  const tabArr = [
    { name: '상세정보', content: <DetailInfo /> },
    { name: '수록곡', content: <DetailTrack /> },
  ];

  return (
    <StyledDetail>
      <section className='album-detail-inner-box'>
        {/* 상세 페이지 썸네일 */}
        <div className='album-detail-wrap'>
          <div className='album-detail-inner'>
            <h2 className='hidden'> 컨텐츠 상세보기</h2>
            <div className='album-detail-cover'>
              <img
                alt='앨범 표지'
                className='album-detail-cover-img'
                src='/Images/album-cover-3.jpg'
              />
              <button title='앨범 듣기' className='album-detail-play hover'>
                <BsFillPlayFill className='album-detail-play-icon' />
              </button>
            </div>
          </div>
          {/* 상세 페이지 앨범 제목 및 가수 */}
          <div className='album-detail-inner-box'>
            <div className='album-detail-title'>관심과 사랑</div>
            <div className='album-detail-singer'>
              <span className='hover'>Monsune</span>
              <img
                alt='아티스트'
                className='album-detail-icon-next'
                src='/Images/next.png'
              />
            </div>
            <div className='album-detail-kind'>싱글</div>
            <div className='album-detail-date'>2022-09-21</div>
            <div className='album-detail-icon'>
              <RiPlayListAddFill className='album-detail-icon-list hover' />
              <RiFolderAddLine className='album-detail-icon-folder hover' />
              <BsSuitHeart className='album-detail-icon-like hover' />
            </div>
          </div>
        </div>
        {/* 상세 페이지 탭 */}
        <div className='album-detail-page-tab'>
          <ul className='album-detail-page-tab-box'>
            {tabArr.map((el, index) => {
              return (
                <li
                  key={index}
                  className={currentTab === index ? 'focus-on' : 'focus-off'}
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
    </StyledDetail>
  );
};

export default AlbumDetail;
