import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BsPlay } from 'react-icons/bs';
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineFolderAdd } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';
import { useState } from 'react';

const StyledChart = styled.div`
    div.chart-inner-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 1280px;
    margin: 0 auto;
    font-family: 'NanumBarunGothic', sans-serif;
    div.chart-main-box {
      width: 100%;
      margin-top: 20px;
      margin-bottom: 50px;
      padding: 0px 100px;
      div.chart-title-box {
        position: relative;
        min-height: 20px;
        padding-bottom: 16px;

        h3.chart-florida-chart-title {
          float: left;
          font-size: 22px;
          color: #333;
          font-weight: 700;
        }

        div.chart-update-time-box {
          float: left;
          padding-top: 5px;
          padding-left: 15px;
          font-size: 13px;
          color: #a0a0a0;

          span.chart-update-time {
            color: inherit;
          }
        }

        button.chart-whole-listen-box {
          position: absolute;
          top: 0;
          right: 0;
          background: none;
          border: none;

          &:hover {
            cursor: pointer;
            color: #3f3fff;
          }

          .chart-whole-listen-icon {
            width: 17px;
            height: 17px;
            display: inline-block;
            vertical-align: middle;
          }
        }
      }

      table.chart-list-table {
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

        th.chart-list-info {
          padding-left: 20px;
        }

        th.chart-list-icon {
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

        td.chart-list-number {
          text-align: center;
        }
        /* 수록곡의 곡/앨범 */
        td.chart-list-info-wrap {
          padding-left: 20px;
          text-align: left;
        }
        div.chart-list-info-box {
          position: relative;
          min-width: 210px;
          max-width: 520px;
          height: 60px;
          padding-right: 28px;
          padding-left: 80px;
        }

        div.chart-list-info-thumb {
          position: absolute;
          top: 0;
          left: 0;
          width: 60px;
          height: 60px;

          a.chart-list-info-album {
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

            img.chart-list-info-img {
              width: 100%;
              height: 100%;
              border-radius: 4px;
              vertical-align: top;
            }
          }
        }
        div.chart-list-info-txt-area {
          max-width: 440px;
          min-width: 130px;
        }
        div.chart-list-song {
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

        div.chart-list-album-box {
          display: flex;
          align-items: center;

          a.chart-list-album-link {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: inline-block;
          }

          div.chart-list-album {
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
        td.chart-list-artist-box {
          position: relative;
          text-align: left;
          font-size: 15px;
          color: #333;

          a.chart-list-artist {
            position: relative;
            min-width: 100px;
            color: black;
          }

          span.chart-artist {
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
        td.chart-list-icon {
          text-align: center;
        }

        button.chart-icon-listen {
          vertical-align: middle;
          background: none;
          border: none;
          white-space: nowrap;
          cursor: pointer;

          &:hover {
            color: #3f3fff;
          }

          .chart-icon-listen-icon {
            width: 35px;
            height: 35px;
          }
        }
      }
    }
    .more-btn{
            height: 32px;
            width: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #000;
            background-color:#fff;
            border: 1px solid #ddd;
            border-radius: 100px;
            font-size: 14px;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
              border: 1px solid #3f3fff;
              color: #3f3fff;
    }
  }}
  `;



const Chart = ({ genre, params, chart, setChart }) => {

  const [visible, setVisible] = useState(10)
  const showMoreChart = () => {
    setVisible(prevValue => prevValue + 10)
  }


  return (
    <StyledChart>

      <div className='chart-inner-box'>
        <div className='chart-main-box'>
          {/* florida 차트 타이틀 */}
          <div className='chart-title-box'>
            <h3 className='chart-florida-chart-title'>{genre}</h3>
            <button className='chart-whole-listen-box' type='button'>
              <BsPlay className='chart-whole-listen-icon' />
              전체듣기
            </button>
          </div>
          {/* florida 차트 */}
          <div className='chart-list-box'>
            <table className='chart-list-table'>
              <caption>곡 목록</caption>
              <colgroup>
                <col width='42' data-cell='체크박스' />
                <col width='40' data-cell='번호' />
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
                      className='chart-list-all-checkbox'
                      type='checkbox'
                    />
                  </th>
                  <th scope='col'>순위</th>
                  <th scope='col' className='chart-list-info'>
                    곡/앨범
                  </th>
                  <th scope='col' className='chart-list-artist'>
                    아티스트
                  </th>
                  <th scope='col' className='chart-list-icon'>
                    {' '}
                    듣기{' '}
                  </th>
                  <th scope='col' className='chart-list-icon'>
                    {' '}
                    내 리스트{' '}
                  </th>
                  <th scope='col' className='chart-list-icon'>
                    {' '}
                    더보기{' '}
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              {/* chart 데이터 0 부터 10자름 */}

              {chart && chart.slice(0, visible).map((song, index) => {
                return (
                  <tbody>
                    <tr>
                      <td className='chart-list-select'>
                        <input
                          name='곡 선택하기'
                          className='chart-list-checkbox'
                          type='checkbox'
                        />
                      </td>
                      {/* 순위 */}
                      <td className='chart-list-number'> {index + 1} </td>
                      {/* 수록곡 곡/앨범 */}
                      <td className='chart-list-info-wrap'>
                        <div className='chart-list-info-box'>
                          {/* 앨범사진 */}
                          <div className='chart-list-info-thumb'>
                            <a href='#' className='chart-list-info-album'>
                              <img
                                alt='앨범 이미지'
                                url={song.albumCover}
                                className='chart-list-info-img'
                              />
                            </a>
                          </div>
                          {/* 곡명/앨범명 */}
                          <div className='chart-list-info-txt-area'>
                            {/* 곡명 */}
                            <div className='chart-list-song'>
                              {song.songTitle}
                            </div>
                            {/* 앨범명 */}
                            <div className='chart-list-album-box'>
                              <a href='#' className='chart-list-album-link'>
                                <div className='chart-list-album'>
                                  {song.albumTitle}
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </td>
                      {/* 수록곡 아티스트 */}
                      <td className='chart-list-artist-box'>
                        <Link to='#' className='chart-list-artist'>
                          <span class='chart-artist'>{song.songArtist}</span>
                        </Link>
                      </td>
                      {/* 수록곡 아이콘 */}
                      {/* 플레이버튼 */}
                      <td className='chart-list-icon'>
                        <button type='button' className='chart-icon-listen'>
                          <BsFillPlayFill className='chart-icon-listen-icon' />
                        </button>
                      </td>
                      {/* 리스트추가버튼 */}
                      <td className='chart-list-icon'>
                        <button type='button' className='chart-icon-listen'>
                          <AiOutlineFolderAdd className='chart-icon-listen-icon' />
                        </button>
                      </td>
                      {/* 더보기버튼 */}
                      <td className='chart-list-icon'>
                        <button type='button' className='chart-icon-listen'>
                          <FiMoreVertical className='chart-icon-listen-icon' />
                        </button>
                      </td>
                    </tr>
                  </tbody>

                )

              })}

            </table>
          </div>
        </div>
        {/* 리스트더보기 버튼 */}
        <button className='more-btn' onClick={showMoreChart}>더보기 &#8744;</button>
      </div>
    </StyledChart>
  );
};

export default Chart;
