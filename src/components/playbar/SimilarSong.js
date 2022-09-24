import styled from "styled-components";
import { IoMdPlay } from "react-icons/io";

const StyledSimilarSong = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  .similar-song-inner-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 630px;

    .song-info {
      padding: 10px 0;
      cursor: pointer;

      .cover {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        margin-right: 20px;
        background-size: cover;
      }

      .title-and-artist {
        .title {
        }
        .artist {
          margin-top: 10px;
          color: #849898;
          font-size: 14px;
        }
      }
    }

    .play {
      color: #85a0a0;
      transform: scale(1.5);
      cursor: pointer;
    }
  }
`;

const SimilarSong = ({ data, musicTracks, setMusicTracks }) => {
  const musicTracksId = musicTracks.map((el) => el.id);
  return (
    <StyledSimilarSong>
      {data.map((el, i) => (
        <div className="similar-song-inner-box" key={el.id}>
          <div
            className="song-info flex-center"
            onClick={() => {
              if (musicTracksId.includes(el.id) === false)
                setMusicTracks([el, ...musicTracks]);
              else alert("현재 재생목록에 이미 존재하는 곡입니다.");
            }}
          >
            <img src={el.albumCover} alt="album cover" className="cover" />
            <div className="title-and-artist">
              <div className="title">{el.songTitle}</div>
              <div className="artist">{el.songArtist}</div>
            </div>
          </div>
          <IoMdPlay
            className="play"
            onClick={() => {
              if (musicTracksId.includes(el.id) === false)
                setMusicTracks([el, ...musicTracks]);
              else alert("현재 재생목록에 이미 존재하는 곡입니다.");
            }}
          />
        </div>
      ))}
    </StyledSimilarSong>
  );
};

export default SimilarSong;
