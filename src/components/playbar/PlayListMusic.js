import styled from "styled-components";
import { AiOutlineMore } from "react-icons/ai";
import { VscNewFolder } from "react-icons/vsc";

const StyledPlayListMusic = styled.div`
  display: flex;
  flex-direction: column;

  .play-list-music-inner-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 630px;

    .song-info {
      padding: 10px 0;
      cursor: pointer;

      .cover {
        width: 50px;
        border-radius: 5px;
        margin-right: 20px;
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

    .icons {
      color: #85a0a0;

      .add-play-list {
        transform: scale(1.5);
        margin-right: 30px;
        cursor: pointer;
      }

      .more {
        transform: scale(1.5);
        cursor: pointer;
      }
    }
  }
`;

const PlayListMusic = ({ musicTracks, setMusicTracks, setTrackIndex }) => {
  console.log(musicTracks);
  const mapMusic = musicTracks.map((el, i) => {
    console.log("el", el, "i", i);
    return (
      <div className="play-list-music-inner-box" key={el.key}>
        <div className="song-info flex-center" onClick={() => setTrackIndex(i)}>
          <img src={el.img} alt="cover" className="cover" />
          <div className="title-and-artist">
            <div className="title">{el.name}</div>
            <div className="artist">{el.artist}</div>
          </div>
        </div>

        <div className="icons">
          <VscNewFolder className="add-play-list" />
          <AiOutlineMore className="more" />
        </div>
      </div>
    );
  });

  return <StyledPlayListMusic>{mapMusic}</StyledPlayListMusic>;
};

export default PlayListMusic;
