import { useEffect, useState } from "react";
import { RiPlayListFill } from "react-icons/ri";
import { HiOutlineHeart, HiHeart } from "react-icons/hi"; // player like
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io"; // expanded player like
import { VscNewFolder } from "react-icons/vsc";

import MyPlayList from "./MyPlayList";
import styled from "styled-components";
import MusicPlayer from "./MusicPlayer";
import PlayList from "./PlayList";

const StyledPlaybar = styled.div`
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .playbar-inner-box {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: black;
    color: white;
    font-family: "NanumBarunGothic", sans-serif;

    .song-info-box {
      position: fixed;
      left: 30px;

      .cover {
        width: 72px;
        height: 72px;
        margin-right: 20px;
        border-radius: 5px;
      }

      .song-info-wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;

        .title {
          font-size: 20px;
        }
        .artist {
          margin-top: 15px;
          font-size: 15px;
          color: #849898;
        }
      }
    }

    .like {
      position: fixed;
      right: 115px;
      width: 25px;
      height: 25px;
      color: #545454;
      transform: scale(1.3);
      cursor: pointer;
      &:hover {
        color: #1b1b1b;
      }
    }

    .playlist {
      position: fixed;
      right: 50px;
      width: 35px;
      height: 35px;
      color: #545454;
      transform: scale(1.2);
      cursor: pointer;

      &:hover {
        color: #1b1b1b;
      }
    }
  }

  // 확장된 플레이어 css

  .expanded-player-inner-box {
    position: fixed;
    bottom: 0;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #262626;
    color: white;
    overflow-y: auto;
    font-family: "NanumBarunGothic", sans-serif;

    &::-webkit-scrollbar {
      display: none;
    }

    .close {
      position: fixed;
      top: 50px;
      left: 50px;
      width: 40px;
      height: 40px;
      filter: invert(84%) sepia(41%) saturate(1%) hue-rotate(91deg)
        brightness(96%) contrast(94%);
      cursor: pointer;

      &:hover {
        filter: invert(35%) sepia(0%) saturate(0%) hue-rotate(119deg)
          brightness(96%) contrast(87%);
      }
    }

    .song-info-box {
      position: relative;
      display: flex;
      flex-direction: column;
      .cover {
        width: 420px;
        height: 420px;
        margin: 140px 0 80px 0;
        border-radius: 10px;
      }
      .song-info-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 650px;
        margin-bottom: 20px;
        .title {
          font-size: 26px;
          font-weight: 900;
        }
        .artist {
          margin-top: 15px;
          font-size: 15px;
          color: #849898;
        }
      }

      .like-and-add {
        position: absolute;
        top: 20px;
        right: 0;
        color: #868686;

        .like {
          margin-right: 20px;
          cursor: pointer;
          &:hover {
            color: #3d3d3f;
          }
        }

        .add-play-list {
          cursor: pointer;
          &:hover {
            color: #3d3d3f;
          }
        }
      }
    }
  }
`;

const Playbar = () => {
  const [isExpandedClicked, setIsExpandedClicked] = useState(false); // playbar 확장 되었을 때
  const [trackIndex, setTrackIndex] = useState(0); // 위 현재 음악 재생목록 오픈
  const [isMyPlayListClicked, setIsMyPlayListClicked] = useState(false); // 재생목록에 추가할 때
  const [isGetMyPlayListClicked, setIsGetMyPlayListClicked] = useState(false); // 내 재생목록 가져올 때
  const [selectedSongId, setSelectedSongId] = useState(Infinity); // 밑의 재생목록의 음악들의 id
  const [isMoreMenuClicked, setIsMoreMenuClicked] = useState(false); // 더보기 클릭
  const [musicTracks, setMusicTracks] = useState([
    {
      id: 0,
      name: "재생목록이 비어있습니다.",
      artist: "비어있음",
      img: "/Images/nothing.png",
      src: "",
    },
  ]);

  // 음악 mockdata 불러오기
  useEffect(() => {
    fetch("http://localhost:3000/music-track-data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length !== 0) setMusicTracks(data);
      });
  }, []);

  return (
    <StyledPlaybar>
      <div
        className={
          isExpandedClicked
            ? "expanded-player-inner-box flex-center"
            : "playbar-inner-box flex-center"
        }
      >
        {!isExpandedClicked || (
          <img
            src="/Images/down-arrow.png"
            alt="close"
            className="close"
            onClick={() => setIsExpandedClicked(!isExpandedClicked)}
          />
        )}
        <div className="song-info-box flex-center">
          <img
            src={musicTracks[trackIndex].img}
            alt="album cover"
            className="cover"
          />
          <div className="song-info-wrapper">
            <div className="title">{musicTracks[trackIndex].name}</div>
            <div className="artist">{musicTracks[trackIndex].artist}</div>
            {!isExpandedClicked || (
              <div className="like-and-add">
                <IoMdHeartEmpty className="like" size="32" />
                <VscNewFolder
                  className="add-play-list"
                  size="30"
                  onClick={() => {
                    setIsMyPlayListClicked(true);
                    setSelectedSongId(Infinity);
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <MusicPlayer
          trackIndex={trackIndex}
          musicTracks={musicTracks}
          setTrackIndex={setTrackIndex}
          isExpandedClicked={isExpandedClicked}
        ></MusicPlayer>
        {isExpandedClicked || <HiOutlineHeart className="like" />}
        {isExpandedClicked || (
          <RiPlayListFill
            className="playlist"
            onClick={() => setIsExpandedClicked(!isExpandedClicked)}
          />
        )}
        {!isExpandedClicked || (
          <PlayList
            musicTracks={musicTracks}
            setMusicTracks={setMusicTracks}
            setTrackIndex={setTrackIndex}
            trackIndex={trackIndex}
            isMyPlayListClicked={isMyPlayListClicked}
            setIsMyPlayListClicked={setIsMyPlayListClicked}
            selectedSongId={selectedSongId}
            setSelectedSongId={setSelectedSongId}
            setIsGetMyPlayListClicked={setIsGetMyPlayListClicked}
            isMoreMenuClicked={isMoreMenuClicked}
            setIsMoreMenuClicked={setIsMoreMenuClicked}
          />
        )}
        <MyPlayList
          isMyPlayListClicked={isMyPlayListClicked}
          setIsMyPlayListClicked={setIsMyPlayListClicked}
          playingMusicId={musicTracks[trackIndex].id}
          selectedSongId={selectedSongId}
          isGetMyPlayListClicked={isGetMyPlayListClicked}
          setIsGetMyPlayListClicked={setIsGetMyPlayListClicked}
        />
      </div>
    </StyledPlaybar>
  );
};

export default Playbar;
