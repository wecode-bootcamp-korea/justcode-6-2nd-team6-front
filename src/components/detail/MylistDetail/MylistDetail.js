import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import MylistTrack from "./MylistTrack";
import { BsFillPlayFill } from "react-icons/bs";
import { RiPlayListAddFill } from "react-icons/ri";
import { RiFolderAddLine } from "react-icons/ri";
import { BsSuitHeart } from "react-icons/bs";

const StyledDetail = styled.div`
  width: 100%;
  min-width: 765px;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  font-family: "NanumBarunGothic", sans-serif;

  /* a, button에 호버 주기 */
  .hover {
    &:hover {
      color: #3f3fff;
      cursor: pointer;
    }
  }

  section.playlist-detail-inner-box {
    height: 100%;
    padding: 95px 80px 40px;
    background-color: #fff;

    div.playlist-detail-wrap {
      display: flex;
      flex-direction: row;
      padding-top: 40px;
    }
  }

  /* 앨범 트랙 커버 이미지*/
  div.playlist-detail-inner {
    position: static;

    div.playlist-detail-cover {
      position: relative;
      width: 240px;
      height: 240px;
      border-radius: 6px;
    }
  }

  img.playlist-detail-cover-img {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: auto;
    border-radius: 6px;

    &:hover {
      filter: brightness(70%);
    }
  }

  button.playlist-detail-play {
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

    .playlist-detail-play-icon {
      width: 100%;
      height: 100%;
    }
  }

  div.playlist-detail-inner-box {
    margin: auto 30px;

    div.playlist-detail-title {
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 30px;

      &:hover {
        cursor: pointer;
        color: #3f3fff;
      }
    }

    div.playlist-detail-singer {
      font-size: 20px;
      margin-bottom: 40px;
      color: #444444;

      img.playlist-detail-icon-next {
        width: 12px;
        height: 12px;
        padding-left: 3px;
      }
    }

    div.playlist-detail-kind {
      font-size: 16px;
      margin-bottom: 12px;
    }

    div.playlist-detail-date {
      font-size: 16px;
      margin-bottom: 40px;
      color: #969ca7;
    }

    .playlist-detail-icon-list,
    .playlist-detail-icon-like {
      width: 25px;
      height: 25px;
      color: #3d3d3d;

      &:hover {
        cursor: pointer;
        color: #3f3fff;
      }
    }

    .playlist-detail-icon-folder {
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

  div.playlist-detail-page-tab {
    margin-top: 50px;
  }

  ul.playlist-detail-page-tab-box {
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

  li.playlist-detail-page-tab-stick {
    margin: 0 10px;
  }

  button.playlist-detail-page-song {
    height: 30px;
    width: 45px;
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
`;

const StyledTab = styled.section`
  margin-top: 10px;
`;

const MylistDetail = ({ musicTracks, setMusicTracks }) => {
  const params = useParams();
  const [playlistInfo, setPlaylistInfo] = useState({
    playlistId: 0,
    characterId: 0,
    playlistTitle: "제목",
    playlistSongsCount: 3,
    createdDate: "22.01.01",
    songId: 0,
    albumImage: "/Images/nothing.png",
  });
  const [playlistSongs, setPlaylistSongs] = useState([
    {
      playlistId: 0,
      songId: 0,
      songTitle: "곡 제목1",
      albumId: 0,
      albumTitle: "앨범 제목1",
      albumImage: "/Images/nothing.png",
      atsId: 1,
      artist: "가수가수",
    },
    {
      playlistId: 1,
      songId: 1,
      songTitle: "곡 제목2",
      albumId: 1,
      albumTitle: "앨범 제목2",
      albumImage: "/Images/nothing.png",
      atsId: 2,
      artist: "가수가수",
    },
    {
      playlistId: 2,
      songId: 2,
      songTitle: "곡 제목3",
      albumId: 2,
      albumTitle: "앨범 제목3",
      albumImage: "/Images/nothing.png",
      atsId: 3,
      artist: "가수가수",
    },
  ]);

  // useEffect(() => {
  //   fetch(`http://localhost:8000/detail/mylist/${params.id}`, {
  //     headers: {
  //       Authorization: sessionStorage.getItem("token"),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setPlaylistInfo(data.playlistInfo[0]);
  //       setPlaylistSongs(data.playlistSongs);
  //     });
  // }, []);

  return (
    <StyledDetail>
      <section className="playlist-detail-inner-box">
        {/* 상세 페이지 썸네일 */}
        <div className="playlist-detail-wrap">
          <div className="playlist-detail-inner">
            <div className="playlist-detail-cover">
              <img
                alt="앨범 표지"
                className="playlist-detail-cover-img"
                src={playlistInfo.albumImage}
              />
              <button title="앨범 듣기" className="playlist-detail-play hover">
                <BsFillPlayFill
                  className="playlist-detail-play-icon"
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
                        const musicTracksId = musicTracks.map(
                          (el) => el.songId
                        );
                        const filteredNewTracks = plData.filter(
                          (el, i) => musicTracksId.includes(el.songId) === false
                        );
                        setMusicTracks([...filteredNewTracks, ...musicTracks]);
                      });
                  }}
                />
              </button>
            </div>
          </div>
          {/* 상세 페이지 앨범 제목 및 가수 */}
          <div className="playlist-detail-inner-box">
            <div className="playlist-detail-title">
              {playlistInfo.playlistTitle}
            </div>
            <div className="playlist-detail-kind">
              총 {playlistInfo.playlistSongsCount}곡
            </div>
            <div className="playlist-detail-date">
              {playlistInfo.createdDate}
            </div>
          </div>
        </div>
        {/* 상세 페이지 상세정보와 수록곡 */}
      </section>
      <MylistTrack
        playlistInfo={playlistInfo}
        playlistSongs={playlistSongs}
        setPlaylistSongs={setPlaylistSongs}
        musicTracks={musicTracks}
        setMusicTracks={setMusicTracks}
      />
    </StyledDetail>
  );
};

export default MylistDetail;
