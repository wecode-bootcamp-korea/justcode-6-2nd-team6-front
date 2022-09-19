import { useEffect, useState } from "react";

import styled from "styled-components";
import AudioPlayer from "react-h5-audio-player";
import MusicPlayer from "./music_player/MusicPlayer";

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
    font-size: 52px;
    font-family: "NanumBarunGothic", sans-serif;

    .box {
    }
  }
`;

const Playbar = () => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [musicTracks, setMusicTracks] = useState([
    {
      name: "재생목록이 비어있습니다.",
      artist: "",
      img: "",
      src: "",
    },
  ]);
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
      <div className="playbar-inner-box flex-center">
        <div className="song-info-box">
          <img src="" alt="" />
        </div>
        <MusicPlayer
          trackIndex={trackIndex}
          musicTracks={musicTracks}
          setTrackIndex={setTrackIndex}
        ></MusicPlayer>
      </div>
    </StyledPlaybar>
  );
};

export default Playbar;
