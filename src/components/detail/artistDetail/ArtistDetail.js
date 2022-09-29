import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ArtistTrack from './ArtistTrack';
import ArtistAlbum from './ArtistAlbum';
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
  margin-bottom: 40px;
  font-family: 'NanumBarunGothic', sans-serif;

  /* a, button에 호버 주기 */
  .hover {
    &:hover {
      color: #3f3fff;
      cursor: pointer;
    }
  }

  section.artist-detail-inner-box {
    height: 100%;
    padding: 95px 80px 40px;
    background-color: #fff;

    div.artist-detail-wrap {
      width: 600px;
      display: flex;
      flex-direction: row;
      padding-top: 40px;
    }
  }

  /* 앨범 트랙 커버 이미지*/
  div.artist-detail-inner {
    position: static;

    div.artist-detail-cover {
      position: relative;
      width: 260px;
      height: 260px;
    }
  }

  img.artist-detail-cover-img {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: auto;
    border-radius: 175px;

    &:hover {
      filter: brightness(70%);
    }
  }

  button.artist-detail-play {
    width: 55px;
    height: 55px;
    z-index: auto;
    position: absolute;
    bottom: 11px;
    right: 9px;
    padding: 0;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 175px;
    background: white;

    .artist-detail-play-icon {
      width: 45px;
      height: 45px;
      vertical-align: middle;
    }
  }

  div.artist-detail-box {
    margin: 75px 0 56px 35px;

    div.artist-detail-singer {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 25px;

      &:hover {
        cursor: pointer;
        color: #3f3fff;
      }
    }

    dl.artist-detail-kind {
      display: flex;
      flex-direction: row;
      font-size: 15px;
      margin-bottom: 10px;

      dd.artist-style {
      }

      dd.artist-stick {
        margin: 0 10px;
        color: #b0afba;
      }
    }

    .artist-detail-icon-list,
    .artist-detail-icon-like {
      width: 25px;
      height: 25px;
      margin-top: 20px;
      color: #b0afba;

      &:hover {
        cursor: pointer;
        color: #3f3fff;
      }
    }
  }

  div.artist-detail-page-tab {
    margin-top: 50px;
  }

  ul.artist-detail-page-tab-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    .focus-on {
      height: 35px;
      width: 60px;
      margin: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-color: #3f3fff;
      border: none;
      border-radius: 100px;
      font-size: 17px;
      text-align: inherit;
      cursor: pointer;
    }

    .focus-off {
      height: 30px;
      width: 50px;
      margin: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      background-color: none;
      border: none;
      border-radius: 100px;
      font-size: 17px;
      text-align: inherit;
      cursor: pointer;
    }
  }

  li.artist-detail-page-tab-stick {
    margin: 0 10px;
  }

  .artist-detail-page-tab-btn {
    font-family: 'NanumBarunGothic', sans-serif;
    background: none;
    border: none;
    font-size: 18px;
    margin: 0 10px;
    cursor: pointer;
  }
`;

const ArtistDetail = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const params = useParams();
  const [artistInfo, setArtistInfo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/detail/artist/${params.artistId}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        setArtistInfo(data.artistInfo);
        console.log(data.artistInfo);
      });
  }, []);

  const selectTabHandler = (index) => {
    setCurrentTab(index);
  };

  const tabArr = [
    { name: '곡', content: <ArtistTrack name='곡' /> },
    { name: '앨범', content: <ArtistAlbum name='앨범' /> },
  ];

  return (
    <StyledDetail>
      <section className='artist-detail-inner-box'>
        {/* 상세 페이지 썸네일 */}
        <div className='artist-detail-wrap'>
          <div className='artist-detail-inner'>
            <h2 className='hidden'> 컨텐츠 상세보기</h2>
            <div className='artist-detail-cover'>
              <img
                alt='앨범 표지'
                className='artist-detail-cover-img'
                src={artistInfo.artistImage}
              />
              <button title='앨범 듣기' className='artist-detail-play hover'>
                <BsFillPlayFill className='artist-detail-play-icon' />
              </button>
            </div>
          </div>
          {/* 상세 페이지 앨범 제목 및 가수 */}
          <div className='artist-detail-box'>
            <div className='artist-detail-singer'>{artistInfo.artistName}</div>
            <dl className='artist-detail-kind'>
              <dd className='artist-style'> {artistInfo.artistType} </dd>
              <dd className='artist-stick'>|</dd>
              <dd className='artist-genre'> {artistInfo.artistGenre} </dd>
            </dl>
            <div className='artist-detail-icon'>
              <BsSuitHeart className='artist-detail-icon-like hover' />
            </div>
          </div>
        </div>
        {/* 상세 페이지 탭 */}
        <div className='artist-detail-page-tab'>
          <ul className='artist-detail-page-tab-box'>
            {tabArr.map((el, index) => {
              return (
                <li
                  key={index}
                  className={currentTab === index ? 'focus-on' : 'focus-off'}
                  onClick={() => {
                    selectTabHandler(index);
                  }}
                >
                  {el.name}
                </li>
              );
            })}
          </ul>
        </div>
        {/* 상세 페이지 상세정보와 수록곡 */}
      </section>
      <div>{tabArr[currentTab].content}</div>
    </StyledDetail>
  );
};

export default ArtistDetail;
