import React from 'react';
import styled from 'styled-components';
import { BsPlay } from 'react-icons/bs';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineFolderAdd } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';

const StyledTrack = styled.div`
  padding-top: 40px;

  div.detail-track-inner-box {
    div.detail-track-whole-box {
      margin-left: 10px;
    }

    .detail-track-whole-icon {
      vertical-align: middle;
    }

    span.detail-track-whole-play {
      font-size: 16px;
      text-align: center;
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

        div.detail-track-list-info-box {
          position: relative;
          min-width: 210px;
          max-width: 520px;
          height: 60px;
          padding-right: 28px;
          padding-left: 80px;

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
        }
      }
      /* 수록곡의 곡/앨범 끝 */
    }
  }
`;

const DetailTrack = () => {
  return (
    <StyledTrack>
      <div className='detail-track-inner-box'>
        <div className='detail-track-whole-box'>
          <BsPlay className='detail-track-whole-icon' />
          <span className='detail-track-whole-play'>전체듣기</span>
        </div>
        {/* 수록곡 정보 */}
        <div className='detail-track-list-box'>
          <table className='detail-track-list-table'>
            <caption>곡 목록</caption>
            <colgroup>
              <col width='42' data-cell='체크박스' />
              <col width='40' data-cell='번호' />
              <col width='*' data-cell='곡/앨범' />
              <col width='250' data-cell='아티스트' />
              <col width='50' data-cell='듣기' />
              <col width='75' data-cell='재생목록' />
              <col width='60' data-cell='더보기' />
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
                <th scope='col'>번호</th>
                <th scope='col' className='detail-track-list-info'>
                  곡/앨범
                </th>
                <th scope='col' className='detail-track-list-artist'>
                  아티스트
                </th>
                <th scope='col'> 듣기 </th>
                <th scope='col'> 내 리스트 </th>
                <th scope='col'> 더보기 </th>
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
                <td className='detail-track-list-number'> 1 </td>
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
                        관심과 사랑{' '}
                      </div>
                    </div>
                  </div>
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
