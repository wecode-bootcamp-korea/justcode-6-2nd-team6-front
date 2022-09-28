import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsFillPlayFill } from 'react-icons/bs';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { RiPlayListAddFill } from 'react-icons/ri';
import { RiFolderAddLine } from 'react-icons/ri';
import { BsSuitHeart } from 'react-icons/bs';

const StyledArtistAlbum = styled.section`
  padding-top: 40px;
  margin-bottom: 40px;

  div.artist-album-inner-box {
    position: relative;
    min-height: 20px;
    padding-bottom: 16px;

    div.artist-album-head-wrap {
      position: absolute;
      top: 0;
      right: 0;
      color: #333;

      button {
        cursor: pointer;
        outline: none;
        vertical-align: middle;
        background: none;
        border: none;
        color: black;
        padding-right: 12px;
        font-size: 14px;

        &:hover {
          color: #3f3fff;
        }
      }

      span.artist-album-stick {
        position: relative;
        padding: 0 10px 0 0;

        ::after {
          position: absolute;
          top: 7px;
          left: 0;
          display: block;
          width: 1px;
          height: 8px;
          background-color: #dcdcdc;
          content: '';
        }
      }
    }
    ul.artist-album-list-wrap {
      margin-left: -20px;
      margin-top: -40px;

      li.artist-album-list-box {
        display: inline-block;
        vertical-align: top;
        width: 412px;
        margin-top: 40px;
        margin-left: 22px;
        padding-right: 12px;

        div.artist-album-list {
          width: 412px;
          display: flex;
          flex-direction: row;
          position: relative;

          div.artist-album-list-thumbnail {
            position: relative;
            height: 175px;
            width: 175px;
            margin-bottom: 15px;
            padding-top: 14px;
            line-height: 175px;
            text-align: center;
          }

          a.artist-album-list-link {
            z-index: auto;
            position: relative;
            display: block;
            height: 100%;
            width: 100%;
            border-radius: 6px;
            background-size: cover;
            background-repeat: no-repeat;
            background-color: #f8f9fa;

            img.artist-album-list-image {
              width: 175px;
              height: 175px;
              vertical-align: top;
              border-radius: 6px;
            }
          }

          button.play-button {
            width: 32px;
            height: 32px;
            z-index: auto;
            position: absolute;
            right: 9px;
            bottom: 12px;
            vertical-align: middle;
            white-space: nowrap;
            color: white;
            border: none;
            background: none;

            .play-button-icon {
              width: 40px;
              height: 40px;
              color: white;
            }
          }

          div.track-info-wrap {
            vertical-align: top;
            position: relative;
            z-index: 6;
            padding-top: 14px;
            padding-left: 20px;
            vertical-align: middle;

            div.track-info-top {
              margin-top: 10px;
              width: 204px;
              position: relative;
            }
            p.track-info-top-title {
              padding-top: 15px;
              font-size: 15px;
              font-weight: 700;
              display: block;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;

              a.track-info-album-link {
                color: #333;
              }
            }

            p.track-info-top-singer {
              padding-top: 8px;
              font-size: 14px;

              a.track-info-singer-link {
                position: relative;
                padding-right: 14px;
                color: #333;

                .track-info-singer-icon {
                  width: 15px;
                  height: 15px;
                  position: absolute;
                  top: 1px;
                  right: 1;
                  display: inline-block;
                  content: '';
                }
              }
            }

            div.track-info-middle {
              padding-top: 20px;

              div.track-info-sort {
                position: relative;
                font-size: 13px;
              }

              div.track-info-date {
                padding-top: 7px;
                position: relative;
                font-size: 13px;
                clear: both;
                color: #969696;
              }
            }

            div.track-info-bottom {
              margin-top: 20px;
              color: #969696;

              .track-info-icon {
                width: 20px;
                height: 20px;
                margin-right: 14px;
              }
            }
          }
        }
      }
    }
  }
`;

const ArtistAlbum = () => {
  return (
    <StyledArtistAlbum>
      <div className='artist-album-inner-box'>
        <div className='artist-album-head-wrap'>
          <button className='artist-album-head-whole' type='button'>
            전체
          </button>
          <button className='artist-album-head-single' type='button'>
            정규/싱글
          </button>
          <button className='artist-album-head-feature' type='button'>
            참여
          </button>
          <span className='artist-album-stick' />
          <button className='artist-album-head-latest' type='button'>
            최신순
          </button>
          <button className='artist-album-head-popular' type='button'>
            인기순
          </button>
          <button className='artist-album-head-ganada' type='button'>
            가나다순
          </button>
        </div>
        <ul className='artist-album-list-wrap'>
          <li className='artist-album-list-box'>
            <div className='artist-album-list'>
              {/* 앨범 표지 */}
              <div className='artist-album-list-thumbnail'>
                <Link to='#' className='artist-album-list-link'>
                  <img
                    alt='앨범 표지'
                    src='/Images/album-cover-2.jpg'
                    className='artist-album-list-image'
                  />
                </Link>
              </div>
              {/* 앨범 설명 */}
              <div className='track-info-wrap'>
                {/* 앨범 타이틀/가수 */}
                <div className='track-info-top'>
                  <p className='track-info-top-title'>
                    <Link to='#' className='track-info-album-link'>
                      가면무도회
                    </Link>
                  </p>
                  <p className='track-info-top-singer'>
                    <Link to='#' className='track-info-singer-link'>
                      비비
                      <MdOutlineNavigateNext className='track-info-singer-icon' />
                    </Link>
                  </p>
                </div>
                {/* 앨범 종류/발매 날짜 */}
                <div className='track-info-middle'>
                  <div className='track-info-sort'>싱글</div>
                  <div className='track-info-date'>2022.09.27</div>
                </div>
                {/* 앨범 아이콘 */}
                <div className='track-info-bottom'>
                  <RiPlayListAddFill className='track-info-icon' />
                  <RiFolderAddLine className='track-info-icon' />
                  <BsSuitHeart className='track-info-icon' />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </StyledArtistAlbum>
  );
};

export default ArtistAlbum;
