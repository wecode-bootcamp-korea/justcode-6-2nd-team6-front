import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledTest = styled.div`
  .test {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 100px;

    .song-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      width: 200px;
      padding: 10px;
      margin: 10px;
      background-color: #cccccc;
      font-weight: 700;
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
    fetch("http://localhost:3000/music-track-data.json")
      .then((res) => res.json())
      .then((data) => {
        setTestSongs(data);
      });
  }, []);

  return (
    <StyledTest>
      <div className="test">
        {testSongs.map((el, i) => {
          return (
            <div className="song-box" key={el.id}>
              <div>{el.songTitle}</div>
              <button
                onClick={() => {
                  if (!musicTracks.includes(el))
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
