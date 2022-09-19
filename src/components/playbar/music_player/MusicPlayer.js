import { useState } from "react";
import styled from "styled-components";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const StyledMusicPlayer = styled.div`
  .music-player-inner-box {
    position: relative;
    width: 30vw;

    .rhap_container {
      outline: none;
      background-color: rgba(0, 0, 0, 0);

      .rhap_controls-section {
        padding-bottom: 10px;
      }

      .rhap_time {
        color: #a0a0a0;
        font-size: 13px;
        font-weight: 700;
      }

      .rhap_volume-container {
        position: fixed;
        right: 200px;
        bottom: 47px;
        width: 100px;
      }

      .rhap_progress-bar {
        height: 6px;
      }

      .rhap_progress-indicator {
        display: none;
      }

      .rhap_download-progress {
        /* background-color: #323232; */
      }

      .rhap_progress-filled {
        background-color: #3f3fff;
      }
    }
  }
`;

const MusicPlayer = ({ trackIndex, setTrackIndex, musicTracks }) => {
  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  return (
    <StyledMusicPlayer>
      <div className="music-player-inner-box">
        <AudioPlayer
          src={musicTracks[trackIndex].src}
          showSkipControls={true}
          showJumpControls={false}
          layout="stacked-reverse"
          volume={0.5}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onEnded={handleClickNext}
        />
      </div>
    </StyledMusicPlayer>
  );
};

export default MusicPlayer;
