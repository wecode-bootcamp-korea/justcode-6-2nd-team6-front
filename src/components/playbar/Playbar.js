import { useEffect, useState } from "react";
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
      .img {
        width: 72px;
        height: 72px;
        margin-right: 20px;
        border-radius: 10%;
      }
      .song-info-wrapper {
        display: flex;
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
      filter: invert(35%) sepia(2%) saturate(7%) hue-rotate(37deg)
        brightness(98%) contrast(96%);
      cursor: pointer;

      &:hover {
        filter: invert(8%) sepia(7%) saturate(12%) hue-rotate(352deg)
          brightness(95%) contrast(94%);
      }
    }

    .playlist {
      position: fixed;
      right: 50px;
      width: 35px;
      height: 35px;
      filter: invert(35%) sepia(2%) saturate(7%) hue-rotate(37deg)
        brightness(98%) contrast(96%);
      cursor: pointer;

      &:hover {
        filter: invert(8%) sepia(7%) saturate(12%) hue-rotate(352deg)
          brightness(95%) contrast(94%);
      }
    }
  }

  // 확장된 플레이어 css

  .expanded-player-inner-box {
    position: absolute;
    top: 0;
    width: 100%;
    min-height: 120vh;
    flex-direction: column;
    background: #262626;
    color: white;
    font-family: "NanumBarunGothic", sans-serif;

    &::-webkit-scrollbar {
      width: 10px;
      background-color: black;
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
      .img {
        width: 420px;
        height: 420px;
        margin: 100px 0 80px 0;
        border-radius: 2.5%;
      }
      .song-info-wrapper {
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
    }
    .like {
      width: 25px;
      height: 25px;
      filter: invert(35%) sepia(2%) saturate(7%) hue-rotate(37deg)
        brightness(98%) contrast(96%);
      cursor: pointer;
    }

    .playlist {
      width: 35px;
      height: 35px;
      filter: invert(35%) sepia(2%) saturate(7%) hue-rotate(37deg)
        brightness(98%) contrast(96%);
      cursor: pointer;
    }
  }
`;

const Playbar = () => {
  const [isExpandedClicked, setIsExpandedClicked] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [musicTracks, setMusicTracks] = useState([
    {
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
            className="img"
          />
          <div className="song-info-wrapper">
            <div className="title">{musicTracks[trackIndex].name}</div>
            <div className="artist">{musicTracks[trackIndex].artist}</div>
          </div>
        </div>
        <MusicPlayer
          trackIndex={trackIndex}
          musicTracks={musicTracks}
          setTrackIndex={setTrackIndex}
          isExpandedClicked={isExpandedClicked}
        ></MusicPlayer>
        {isExpandedClicked || (
          <img src="/Images/heart.png" alt="like" className="like" />
        )}
        {isExpandedClicked || (
          <img
            src="/Images/playlist.png"
            alt="playlist"
            className="playlist"
            onClick={() => setIsExpandedClicked(!isExpandedClicked)}
          />
        )}
        {!isExpandedClicked || <PlayList />}
      </div>
    </StyledPlaybar>
  );
};

export default Playbar;
