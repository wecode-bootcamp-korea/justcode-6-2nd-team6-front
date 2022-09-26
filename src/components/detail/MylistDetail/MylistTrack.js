import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPlay } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { VscNewFolder, VscTrash } from "react-icons/vsc";
import { AiOutlineCheck } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { IoDiscOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

const StyledTrack = styled.div`
  padding-top: 40px;

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .detail-track-inner-box {
    .detail-track-whole-box {
      justify-content: space-between;
      .detail-track-whole-play-btn {
        display: flex;
        align-items: flex-end;
        background: none;
        border: none;

        &:hover {
          cursor: pointer;
          color: #3f3fff;
        }
      }
    }

    .detail-track-whole-icon {
      width: 17px;
      height: 17px;
    }

    .detail-track-whole-play {
      font-size: 16px;
    }

    .detail-track-list-table {
      min-width: 100%;
      max-width: none;
      width: auto;
      border-collapse: collapse;
      margin-bottom: 30px;
      table-layout: fixed;
      text-indent: initial;
      border-spacing: 2px;
      font-family: "NanumBarunGothic", sans-serif;

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

      .detail-track-list-number {
        text-align: center;
      }
      /* 수록곡의 곡/앨범 */
      .detail-track-list-info-wrap {
        padding-left: 20px;
        text-align: left;
      }
      .detail-track-list-info-box {
        position: relative;
        min-width: 210px;
        max-width: 520px;
        height: 60px;
        padding-right: 28px;
        padding-left: 80px;
      }

      .detail-track-list-info-thumb {
        position: absolute;
        top: 0;
        left: 0;
        width: 60px;
        height: 60px;

        .detail-track-list-info-album {
          position: relative;
          display: block;
          height: 100%;
          cursor: pointer;

          ::before {
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            border-radius: 4px;
            border: 1px solid rgba(0, 0, 0, 0.05);
            content: "";
          }

          .detail-track-list-info-img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
            vertical-align: top;
          }
        }
      }
      .detail-track-list-info-txt-area {
        max-width: 440px;
        min-width: 130px;
      }
      .detail-track-list-song {
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
        cursor: pointer;
      }

      .detail-track-list-album-box {
        display: flex;
        align-items: center;

        .detail-track-list-album-link {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: inline-block;
        }

        .detail-track-list-album {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          padding-top: 6px;
          font-size: 15px;
          color: #969696;
          white-space: pre;
          cursor: pointer;
        }
      }
      /* 수록곡 아티스트 */
      .detail-track-list-artist-box {
        position: relative;
        text-align: left;
        font-size: 15px;
        color: #333;

        .detail-track-list-artist {
          position: relative;
          min-width: 100px;
          color: black;
        }

        .detail-track-artist {
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
      .detail-track-list-icon {
        text-align: center;
      }

      .detail-track-icon-listen {
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

    .edit-container {
      display: flex;
      position: fixed;
      bottom: 150px;
      right: calc(50% - 150px);
      width: 300px;
      border-radius: 5px;
      background-color: #3f3fff;
      color: white;

      .edit-box {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 33.3%;
        cursor: pointer;
        font-size: 14px;

        &:nth-of-type(2) {
          .wrapper {
            border-right: 2px solid #5252ff;
            border-left: 2px solid #5252ff;
          }
        }

        .checklist-counter {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          bottom: 90px;
          left: 15px;
          width: 40px;
          height: 40px;
          border: 3px solid #3f3fff;
          border-radius: 100%;
          background-color: white;
          color: #3f3fff;
          font-weight: 700;
          z-index: 1;
        }

        .wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 30px 0;

          .icon {
            margin-bottom: 20px;
            transform: scale(1.75);
          }
        }
      }
    }

    .more-menu-list {
      position: absolute;
      right: 0;
      top: 35px;
      padding: 10px 0;
      border-radius: 3px;
      background-color: white;
      z-index: 30;

      .more-menu {
        display: flex;
        align-items: center;
        padding: 15px;
        width: 180px;
        height: 40px;
        color: black;
        font-size: 15px;
        cursor: pointer;

        &:hover {
          color: #3f3fff;
          background-color: #f5f5f5;
        }

        .icon {
          margin-right: 10px;
          transform: scale(1.25);
        }
      }
    }
  }
`;

const MylistTrack = ({
  playlistSongs,
  setPlaylistSongs,
  musicTracks,
  setMusicTracks,
  playlistInfo,
}) => {
  const params = useParams();
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [checkedList, setCheckedList] = useState([]);

  const onCheckedElement = (checked, item) => {
    if (checked === false) {
      setCheckedList([...checkedList, item]);
    } else if (checked === true) {
      setCheckedList(checkedList.filter((el) => el !== item));
    }
    console.log(checkedList);
  };

  return (
    <StyledTrack>
      <div className="detail-track-inner-box">
        <div className="detail-track-whole-box flex-center">
          <div
            className="detail-track-whole-play-btn flex-center hover"
            type="button"
            onClick={() => {
              fetch(
                `http://localhost:8000/play/addsongs/playlist/${params.id}`,
                {
                  headers: {
                    Authorization: sessionStorage.getItem("token"),
                  },
                }
              )
                .then((res) => res.json())
                .then((plData) => {
                  const musicTracksId = musicTracks.map((el) => el.songId);
                  const filteredNewTracks = plData.filter(
                    (el, i) => musicTracksId.includes(el.songId) === false
                  );
                  setMusicTracks([...filteredNewTracks, ...musicTracks]);
                });
            }}
          >
            <BsPlay className="detail-track-whole-icon" />
            <span className="detail-track-whole-play">전체듣기</span>
          </div>

          <span
            className="edit hover"
            onClick={() => {
              setIsEditClicked(!isEditClicked);
              setCheckedList([]);
            }}
          >
            {isEditClicked ? "완료" : "편집"}
          </span>
        </div>
        {/* 수록곡 정보 */}
        <div className="detail-track-list-box">
          <table className="detail-track-list-table">
            <caption>곡 목록</caption>
            <colgroup>
              <col width="45" data-cell="체크박스" />
              <col width="*" data-cell="곡/앨범" />
              <col width="250" data-cell="아티스트" />
              <col width="70" data-cell="듣기" />
              <col width="75" data-cell="재생목록" />
              <col width="70" data-cell="더보기" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">
                  <input
                    name="전체 곡 선택하기"
                    className="detail-track-list-all-checkbox"
                    type="checkbox"
                    disabled={isEditClicked ? false : true}
                    checked={
                      Number(playlistInfo.playlistSongsCount) ===
                      checkedList.length
                        ? true
                        : false
                    }
                    onClick={() => {
                      // 편집 (전체선택)
                      console.log(playlistInfo);
                      if (checkedList.length < musicTracks.length) {
                        setCheckedList(musicTracks.map((el) => el.songId));
                      } else setCheckedList([]);
                    }}
                  />
                </th>
                <th scope="col" className="detail-track-list-info">
                  곡/앨범
                </th>
                <th scope="col" className="detail-track-list-artist">
                  아티스트
                </th>
                <th scope="col" className="detiail-track-list-icon">
                  듣기
                </th>
                <th scope="col" className="detiail-track-list-icon">
                  내 리스트
                </th>
                <th scope="col" className="detiail-track-list-icon">
                  더보기
                </th>
              </tr>
            </thead>
            <tbody>
              <SongBar
                playlistSongs={playlistSongs}
                setPlaylistSongs={setPlaylistSongs}
                musicTracks={musicTracks}
                setMusicTracks={setMusicTracks}
                isEditClicked={isEditClicked}
                checkedList={checkedList}
                setCheckedList={setCheckedList}
                onCheckedElement={onCheckedElement}
              />
            </tbody>
          </table>
        </div>
        {!isEditClicked || checkedList.length === 0 || (
          <div className="edit-inner-box">
            <div className="edit-container">
              <div className="edit-box">
                <div className="checklist-counter">{checkedList.length}</div>
                <div
                  className="wrapper"
                  onClick={() => {
                    setCheckedList([]);
                  }}
                >
                  <AiOutlineCheck className="icon" />
                  <div className="text">선택해제</div>
                </div>
              </div>
              <div className="edit-box">
                <div
                  className="wrapper"
                  onClick={() => {
                    // setIsMyPlayListClicked(true);
                  }}
                >
                  <VscNewFolder className="icon" />
                  <div className="text">내 리스트</div>
                </div>
              </div>
              <div className="edit-box">
                <div
                  className="wrapper"
                  onClick={() => {
                    setCheckedList([]);
                  }}
                >
                  <VscTrash className="icon" />
                  <div className="text">삭제</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </StyledTrack>
  );
};

const SongBar = ({
  playlistSongs,
  setPlaylistSongs,
  musicTracks,
  setMusicTracks,
  isEditClicked,
  checkedList,
  setCheckedList,
  onCheckedElement,
}) => {
  const musicTracksId = musicTracks.map((el) => el.songId);
  const navigate = useNavigate();
  return playlistSongs.map((el, i) => {
    const songPlay = () => {
      fetch(`http://localhost:8000/play/addsongs/song/${el.songId}`, {
        headers: {
          Authorization: sessionStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const song = data[0];
          if (musicTracksId.includes(song.songId) === false)
            setMusicTracks([song, ...musicTracks]);
          else alert("현재 재생목록에 이미 존재하는 곡입니다.");
        });
    };
    return (
      <tr key={el.songId}>
        <td className="detail-track-list-select">
          <input
            name="곡 선택하기"
            className="detail-track-list-checkbox"
            type="checkbox"
            disabled={isEditClicked ? false : true}
            checked={checkedList.includes(el.songId) ? true : false}
            onChange={() => {
              onCheckedElement(checkedList.includes(el.songId), el.songId);
            }}
          />
        </td>
        {/* 수록곡 곡/앨범 */}
        <td className="detail-track-list-info-wrap">
          <div className="detail-track-list-info-box">
            <div className="detail-track-list-info-thumb">
              <div
                onClick={() => {
                  if (isEditClicked === true)
                    onCheckedElement(
                      checkedList.includes(el.songId),
                      el.songId
                    );
                }}
                className="detail-track-list-info-album"
              >
                <img
                  alt="앨범 이미지"
                  src={el.albumImage}
                  className="detail-track-list-info-img"
                />
              </div>
            </div>
            <div className="detail-track-list-info-txt-area">
              <div
                className="detail-track-list-song"
                onClick={() => {
                  if (isEditClicked === true)
                    onCheckedElement(
                      checkedList.includes(el.songId),
                      el.songId
                    );
                  else songPlay();
                }}
                style={{ cursor: !isEditClicked || "pointer" }}
              >
                {el.songTitle}
              </div>
              <div className="detail-track-list-album-box">
                <div
                  onClick={() => {
                    if (isEditClicked === true)
                      onCheckedElement(
                        checkedList.includes(el.songId),
                        el.songId
                      );
                  }}
                  className="detail-track-list-album-link"
                >
                  <div className="detail-track-list-album">{el.albumTitle}</div>
                </div>
              </div>
            </div>
          </div>
        </td>
        {/* 수록곡 아티스트 */}
        <td className="detail-track-list-artist-box">
          <Link to={`/detail`} className="detail-track-list-artist">
            <span className="detail-track-artist">{el.artist}</span>
          </Link>
        </td>
        {/* 수록곡 아이콘 */}
        <td className="detail-track-list-icon">
          <button type="button" className="detail-track-icon-listen">
            <BsFillPlayFill
              className="detail-track-icon-listen-icon"
              onClick={() => {
                songPlay();
              }}
            />
          </button>
        </td>
        <td className="detail-track-list-icon">
          <button type="button" className="detail-track-icon-listen">
            <AiOutlineFolderAdd className="detail-track-icon-listen-icon" />
          </button>
        </td>
        <td className="detail-track-list-icon">
          <button type="button" className="detail-track-icon-listen">
            <FiMoreVertical className="detail-track-icon-listen-icon" />
          </button>
        </td>
        <div className="more-menu-list" onClick={() => {}}>
          <div className="more-menu">
            <IoDiscOutline className="icon" />
            앨범 정보
          </div>
          <div className="more-menu">
            <BiMicrophone className="icon" />
            아티스트 정보
          </div>
          <div className="more-menu">
            <IoMdHeartEmpty className="icon" />
            좋아요
          </div>
        </div>
      </tr>
    );
  });
};

export default MylistTrack;
