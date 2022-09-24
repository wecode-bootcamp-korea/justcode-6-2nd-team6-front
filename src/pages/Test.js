import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledTest = styled.div`
  .test {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;

    .song-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: 100px;
      width: 200px;
      padding: 10px;
      margin: 10px;
      background-color: #cccccc;
      font-weight: 700;

      .artist {
        font-size: 12px;
        margin: 10px 0;
      }
    }
  }
`;

const Test = ({ musicTracks, setMusicTracks }) => {
  const [testSongs, setTestSongs] = useState([
    {
      id: 1,
      songTitle: "Memories",
      songArtist: "Royalty Free Music from Bensound",
      albumCover: "https://i.esdrop.com/d/f/WFi7Wlweew/MBH574A3dR.jpg",
      content: "https://www.bensound.com/bensound-music/bensound-memories.mp3",
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:3000/datas/music-track-data.json")
      .then((res) => res.json())
      .then((data) => {
        setTestSongs(data);
      });
  }, []);

  const musicTracksId = musicTracks.map((el) => el.id);

  return (
    <StyledTest>
      <div className="test">
        {testSongs.map((el, i) => {
          return (
            <div className="song-box" key={el.id}>
              <div>{el.songTitle}</div>
              <div className="artist">{el.songArtist}</div>
              <button
                onClick={() => {
                  if (musicTracksId.includes(el.id) === false)
                    setMusicTracks([el, ...musicTracks]);
                  else alert("현재 재생목록에 이미 존재하는 곡입니다.");
                }}
              >
                재생
              </button>
            </div>
          );
        })}
      </div>
    </StyledTest>
  );
};

export default Test;
