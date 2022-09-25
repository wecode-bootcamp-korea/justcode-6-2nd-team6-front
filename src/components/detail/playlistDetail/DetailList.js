import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsPlay } from 'react-icons/bs';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineFolderAdd } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';

const StyledTrack = styled.div`
  padding-top: 40px;

  div.detail-track-inner-box {
    button.detail-track-whole-play-btn {
      display: flex;
      align-items: flex-end;
      background: none;
      border: none;

      &:hover {
        cursor: pointer;
        color: #3f3fff;
      }
    }

    .detail-track-whole-icon {
      width: 17px;
      height: 17px;
    }

    span.detail-track-whole-play {
      font-size: 16px;
    }

    table.detail-track-list-table {
      min-width: 100%;
      max-width: none;
      width: auto;
      border-collapse: collapse;
      table-layout: fixed;
      text-indent: initial;
      border-spacing: 2px;
      font-family: 'NanumBarunGothic', sans-serif;

      caption {
        margin: 20px 0;
        color: transparent;
        text-indent: 100%;
        vertical-align: middle;
        white-space: nowrap;
        overflow: hidden;
      }

      thead {
        display: table-header-group;
        vertical-align: middle;
        border-color: inherit;
      }

      tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
      }

      th {
        height: 40px;
        display: table-cell;
        vertical-align: inherit;
        white-space: nowrap;
        text-align: left;
        color: #a0a0a0;
        font-size: 15px;
        font-weight: 500;
        border-top: 1px solid #ebebeb;
        border-bottom: 1px solid #ebebeb;
      }

      th.detail-track-list-info {
        padding-left: 20px;
      }

      th.detiail-track-list-icon {
        text-align: center;
      }

      tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
      }

      td {
        position: relative;
        height: 84px;
        border-bottom: 1px solid #f6f6f6;
        display: table-cell;
        vertical-align: inherit;
      }

      td.detail-track-list-number {
        text-align: center;
      }
      /* 수록곡의 곡/앨범 */
      td.detail-track-list-info-wrap {
        padding-left: 20px;
        text-align: left;
      }
      div.detail-track-list-info-box {
        position: relative;
        min-width: 210px;
        max-width: 520px;
        height: 60px;
        padding-right: 28px;
        padding-left: 80px;
      }

      div.detail-track-list-info-thumb {
        position: absolute;
        top: 0;
        left: 0;
        width: 60px;
        height: 60px;

        a.detail-track-list-info-album {
          position: relative;
          display: block;
          height: 100%;

          ::before {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            border-radius: 4px;
            border: 1px solid rgba(0, 0, 0, 0.05);
            content: '';
          }

          img.detail-track-list-info-img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
            vertical-align: top;
          }
        }
      }
      div.detail-track-list-info-txt-area {
        max-width: 440px;
        min-width: 130px;
      }
      div.detail-track-list-song {
        width: 100%;
        text-align: left;
        font-family: inherit;
        vertical-align: middle;
        padding-top: 12px;
        padding-bottom: 5px;
        font-size: 16px;
        color: #333;
        font-weight: 400;
        white-space: pre;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      div.detail-track-list-album-box {
        display: flex;
        align-items: center;

        a.detail-track-list-album-link {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: inline-block;
        }

        div.detail-track-list-album {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-top: 6px;
          font-size: 15px;
          color: #969696;
          white-space: pre;
        }
      }
      /* 수록곡 아티스트 */
      td.detail-track-list-artist-box {
        position: relative;
        text-align: left;
        font-size: 15px;
        color: #333;

        a.detail-track-list-artist {
          position: relative;
          min-width: 100px;
          color: black;
        }

        span.detail-track-artist {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
          white-space: nowrap;
          width: 196px;
          font-size: 15px;

          &:hover {
            cursor: pointer;
            color: #3f3fff;
          }
        }
      }
      /* 수록곡 듣기,내 리스트, 더보기 아이콘 */
      td.detail-track-list-icon {
        text-align: center;
      }

      button.detail-track-icon-listen {
        vertical-align: middle;
        background: none;
        border: none;
        white-space: nowrap;
        cursor: pointer;

        &:hover {
          color: #3f3fff;
        }

        .detail-track-icon-listen-icon {
          width: 35px;
          height: 35px;
        }
      }
    }
  }
`;

const DetailTrack = () => {
  return (
    <StyledTrack>
      <div className='detail-track-inner-box'>
        <div className='detail-track-whole-box'>
          <button class='detail-track-whole-play-btn' type='button'>
            <BsPlay className='detail-track-whole-icon' />
            <span className='detail-track-whole-play'>전체듣기</span>
          </button>
        </div>
        {/* 수록곡 정보 */}
        <div className='detail-track-list-box'>
          <table className='detail-track-list-table'>
            <caption>곡 목록</caption>
            <colgroup>
              <col width='45' data-cell='체크박스' />
              <col width='*' data-cell='곡/앨범' />
              <col width='250' data-cell='아티스트' />
              <col width='70' data-cell='듣기' />
              <col width='75' data-cell='재생목록' />
              <col width='70' data-cell='더보기' />
            </colgroup>
            <thead>
              <tr>
                <th scope='col'>
                  <input
                    name='전체 곡 선택하기'
                    className='detail-track-list-all-checkbox'
                    type='checkbox'
                  />
                </th>
                <th scope='col' className='detail-track-list-info'>
                  곡/앨범
                </th>
                <th scope='col' className='detail-track-list-artist'>
                  아티스트
                </th>
                <th scope='col' className='detiail-track-list-icon'>
                  {' '}
                  듣기{' '}
                </th>
                <th scope='col' className='detiail-track-list-icon'>
                  {' '}
                  내 리스트{' '}
                </th>
                <th scope='col' className='detiail-track-list-icon'>
                  {' '}
                  더보기{' '}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='detail-track-list-select'>
                  <input
                    name='곡 선택하기'
                    className='detail-track-list-checkbox'
                    type='checkbox'
                  />
                </td>
                {/* 수록곡 곡/앨범 */}
                <td className='detail-track-list-info-wrap'>
                  <div className='detail-track-list-info-box'>
                    <div className='detail-track-list-info-thumb'>
                      <a href='#' className='detail-track-list-info-album'>
                        <img
                          alt='앨범 이미지'
                          src='/Images/album-cover-3.jpg'
                          className='detail-track-list-info-img'
                        />
                      </a>
                    </div>
                    <div className='detail-track-list-info-txt-area'>
                      <div className='detail-track-list-song'>
                        {' '}
                        관심과 사랑(inst.){' '}
                      </div>
                      <div className='detail-track-list-album-box'>
                        <a href='#' className='detail-track-list-album-link'>
                          <div className='detail-track-list-album'>
                            {' '}
                            사랑과 이별{' '}
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </td>
                {/* 수록곡 아티스트 */}
                <td className='detail-track-list-artist-box'>
                  <Link to='#' className='detail-track-list-artist'>
                    <span class='detail-track-artist'>Monsune</span>
                  </Link>
                </td>
                {/* 수록곡 아이콘 */}
                <td className='detail-track-list-icon'>
                  <button type='button' className='detail-track-icon-listen'>
                    <BsFillPlayFill className='detail-track-icon-listen-icon' />
                  </button>
                </td>
                <td className='detail-track-list-icon'>
                  <button type='button' className='detail-track-icon-listen'>
                    <AiOutlineFolderAdd className='detail-track-icon-listen-icon' />
                  </button>
                </td>
                <td className='detail-track-list-icon'>
                  <button type='button' className='detail-track-icon-listen'>
                    <FiMoreVertical className='detail-track-icon-listen-icon' />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </StyledTrack>
  );
};

export default DetailTrack;
