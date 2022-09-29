import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BsPlay } from 'react-icons/bs';
import { BsFillPlayFill } from 'react-icons/bs';
import { VscNewFolder } from 'react-icons/vsc';
import { AiOutlineMore } from 'react-icons/ai';

const StyledLi = styled.li`
  color: ${(props) => (props.selected ? '#3f3fff' : 'black')};
`;

const StyledTrack = styled.div`
  div.artist-track-inner-box {
    div.artist-track-whole-box {
      margin-left: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    button.artist-track-whole-play-btn {
      display: flex;
      align-items: flex-end;
      background: none;
      border: none;

      &:hover {
        cursor: pointer;
        color: #3f3fff;
      }
    }

    .artist-track-whole-icon {
      width: 17px;
      height: 17px;
    }

    span.artist-track-whole-play {
      font-size: 14px;
    }

    div.artist-track-head-wrap {
      color: #333;
      display: flex;

      ul {
        display: flex;

        ${StyledLi} {
          margin-right: 15px;
          font-size: 14px;
          cursor: pointer;

          &:hover {
            color: #3f3fff;
          }
        }
      }
    }

    span.artist-track-stick {
      position: relative;
      margin-right: 15px;

      ::after {
        position: absolute;
        top: 3px;
        left: 0;
        display: block;
        width: 1px;
        height: 8px;
        background-color: #dcdcdc;
        content: '';
      }
    }
  }

  table.artist-track-list-table {
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

    th.artist-track-list-info {
      padding-left: 20px;
    }

    th.artist-track-list-icon {
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

    td.artist-track-list-number {
      text-align: center;
    }
    /* 수록곡의 곡/앨범 */
    td.artist-track-list-info-wrap {
      padding-left: 20px;
      text-align: left;
    }
    div.artist-track-list-info-box {
      position: relative;
      min-width: 210px;
      max-width: 520px;
      height: 60px;
      padding-right: 28px;
      padding-left: 80px;
    }

    div.artist-track-list-info-thumb {
      position: absolute;
      top: 0;
      left: 0;
      width: 60px;
      height: 60px;

      a.artist-track-list-info-album {
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

        img.artist-track-list-info-img {
          width: 100%;
          height: 100%;
          border-radius: 4px;
          vertical-align: top;
        }
      }
    }
    div.artist-track-list-info-txt-area {
      max-width: 440px;
      min-width: 130px;
    }
    div.artist-track-list-song {
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

    div.artist-track-list-album-box {
      display: flex;
      align-items: center;

      a.artist-track-list-album-link {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: inline-block;
      }

      div.artist-track-list-album {
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
    td.artist-track-list-artist-box {
      position: relative;
      text-align: left;
      font-size: 15px;
      color: #333;

      a.artist-track-list-artist {
        position: relative;
        min-width: 100px;
        color: black;
      }

      span.artist-track-artist {
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
    td.artist-track-list-icon {
      text-align: center;
    }

    button.artist-track-icon-listen {
      vertical-align: middle;
      background: none;
      border: none;
      white-space: nowrap;
      cursor: pointer;

      &:hover {
        color: #3f3fff;
      }

      .artist-track-icon-listen-icon {
        width: 28px;
        height: 28px;
      }
    }
  }
`;

const ArtistTrack = ({ name }) => {
  const params = useParams();
  const [roleType, setRoleType] = useState([
    { id: 1, name: '전체', selected: false },
    { id: 2, name: '정규/싱글', selected: false },
    { id: 3, name: '참여', selected: false },
  ]);
  const [sortType, setSortType] = useState([
    { id: 1, name: '최신순', selected: false },
    { id: 2, name: '인기순', selected: false },
    { id: 3, name: '가나다순', selected: false },
  ]);
  const [songsData, setSongsData] = useState([]);
  const [trackData, setTrackData] = useState([]);

  const sortHandler = (e) => {
    const arr = sortType.map((data) => {
      return data.id === Number(e.target.type)
        ? { id: data.id, name: data.name, selected: true }
        : { id: data.id, name: data.name, selected: false };
    });
    setSortType(arr);

    const selectedName = arr.filter((result) => {
      return result.selected;
    })[0].name;
    const newArr = songsData.filter((data) => {
      return !data.includes('sortType=');
    });

    if (selectedName == '최신순') {
      setSongsData(() => [...newArr, 'sortType=RECENT']);
    } else if (selectedName == '인기순') {
      return setSongsData(() => [...newArr, 'sortType=POPULARITY']);
    } else if (selectedName == '가나다순') {
      return setSongsData(() => [...newArr, 'sortType=WORD']);
    }
  };

  const roleHandler = (e) => {
    const arr = roleType.map((data) => {
      return data.id == e.target.type
        ? { id: data.id, name: data.name, selected: true }
        : { id: data.id, name: data.name, selected: false };
    });
    setRoleType(arr);

    const selectedName = arr.filter((result) => {
      return result.selected;
    })[0].name;
    const newArr = songsData.filter((data) => {
      return !data.includes('roleType=');
    });

    if (selectedName == '전체') {
      setSongsData(() => [...newArr, ' roleType=ALL']);
    } else if (selectedName == '정규/싱글') {
      return setSongsData(() => [...newArr, 'roleType=RELEASE']);
    } else if (selectedName == '참여') {
      return setSongsData(() => [...newArr, 'roleType=JOIN']);
    }
  };

  useEffect(() => {
    const result = name == '곡' ? 'songs' : 'albums';
    const queryString = songsData.length == 0 ? '' : '?' + songsData.join('&');
    fetch(
      `http://localhost:8000/detail/artist/${params.artistId}/songs/${queryString}`,
      {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setTrackData(data.artistSongs);
      });
  }, [songsData]);

  return (
    <StyledTrack>
      <div className='artist-track-inner-box'>
        <div className='artist-track-whole-box'>
          <button className='artist-track-whole-play-btn' type='button'>
            <BsPlay className='artist-track-whole-icon' />
            <span className='artist-track-whole-play'>전체듣기</span>
          </button>
          <div className='artist-track-head-wrap'>
            <ul>
              {roleType.map((result) => {
                return (
                  <StyledLi
                    selected={result.selected}
                    className='type'
                    type={result.id}
                    onClick={roleHandler}
                  >
                    {result.name}
                  </StyledLi>
                );
              })}
            </ul>
            <span className='artist-track-stick' />
            <ul>
              {sortType.map((result) => {
                return (
                  <StyledLi
                    selected={result.selected}
                    className='type'
                    type={result.id}
                    onClick={sortHandler}
                  >
                    {result.name}
                  </StyledLi>
                );
              })}
            </ul>
          </div>
        </div>
        {/* 수록곡 정보 */}
        <div className='artist-track-list-box'>
          <table className='artist-track-list-table'>
            <caption>곡 목록</caption>
            <colgroup>
              <col width='42' data-cell='체크박스' />
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
                    className='artist-track-list-all-checkbox'
                    type='checkbox'
                  />
                </th>
                <th scope='col' className='artist-track-list-info'>
                  곡/앨범
                </th>
                <th scope='col' className='artist-track-list-artist'>
                  아티스트
                </th>
                <th scope='col' className='artist-track-list-icon'>
                  {' '}
                  듣기{' '}
                </th>
                <th scope='col' className='artist-track-list-icon'>
                  {' '}
                  내 리스트{' '}
                </th>
                <th scope='col' className='artist-track-list-icon'>
                  {' '}
                  더보기{' '}
                </th>
              </tr>
            </thead>
            <tbody>
              {trackData.map((el) => {
                return (
                  <tr key={el.songId}>
                    <td className='artist-track-list-select'>
                      <input
                        name='곡 선택하기'
                        className='artist-track-list-checkbox'
                        type='checkbox'
                      />
                    </td>
                    {/* 수록곡 곡/앨범 */}
                    <td className='artist-track-list-info-wrap'>
                      <div className='artist-track-list-info-box'>
                        <div className='artist-track-list-info-thumb'>
                          <Link
                            to={`/detail/album/${el.albumId}/details`}
                            className='artist-track-list-info-album'
                          >
                            <img
                              alt='앨범 이미지'
                              src={el.albumImage}
                              className='artist-track-list-info-img'
                            />
                          </Link>
                        </div>
                        <div className='artist-track-list-info-txt-area'>
                          <div className='artist-track-list-song'>
                            {' '}
                            {el.songTitle}{' '}
                          </div>
                          <div className='artist-track-list-album-box'>
                            <Link
                              to={`/detail/album/${el.albumId}/details`}
                              className='artist-track-list-album-link'
                            >
                              <div className='artist-track-list-album'>
                                {' '}
                                {el.albumTitle}{' '}
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* 수록곡 아티스트 */}
                    <td className='artist-track-list-artist-box'>
                      <Link to='#' className='artist-track-list-artist'>
                        <span className='artist-track-artist'>
                          {el.artistName}
                        </span>
                      </Link>
                    </td>
                    {/* 수록곡 아이콘 */}
                    <td className='artist-track-list-icon'>
                      <button
                        type='button'
                        className='artist-track-icon-listen'
                      >
                        <BsFillPlayFill className='artist-track-icon-listen-icon' />
                      </button>
                    </td>
                    <td className='artist-track-list-icon'>
                      <button
                        type='button'
                        className='artist-track-icon-listen'
                      >
                        <VscNewFolder className='artist-track-icon-listen-icon' />
                      </button>
                    </td>
                    <td className='artist-track-list-icon'>
                      <button
                        type='button'
                        className='artist-track-icon-listen'
                      >
                        <AiOutlineMore className='artist-track-icon-listen-icon' />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </StyledTrack>
  );
};

export default ArtistTrack;
